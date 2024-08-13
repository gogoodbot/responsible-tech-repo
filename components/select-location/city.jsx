import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { City } from 'country-state-city';

export default function SelectProvince({
  onCitySelect,
  countryCode,
  stateCode,
}) {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCityChange = (selectedOption) => {
    setSelectedCity(selectedOption);
    onCitySelect?.(selectedOption);
  };

  useEffect(() => {
    setSelectedCity(null);
    const allCities = City.getCitiesOfState(countryCode, stateCode).map(
      (city) => ({
        value: city.isoCode,
        label: city.name,
      })
    );

    setCities(allCities);
    console.log('Fetched Cities: ', allCities);
  }, [countryCode, stateCode]);

  return (
    <div>
      <label>
        City
        <Select
          options={cities}
          value={selectedCity}
          onChange={handleCityChange}
        />
      </label>
    </div>
  );
}
