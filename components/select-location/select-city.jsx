import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { City } from 'country-state-city';

export default function SelectProvince({
  onCitySelect,
  countryCode,
  stateCode,
  selectedCity,
}) {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const allCities = City.getCitiesOfState(countryCode, stateCode).map(
      (city) => ({
        value: city.isoCode,
        label: city.name,
      })
    );

    setCities(allCities);
  }, [countryCode, stateCode]);

  return (
    <div>
      <label>
        City
        <Select options={cities} value={selectedCity} onChange={onCitySelect} />
      </label>
    </div>
  );
}
