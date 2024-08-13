import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { Country } from 'country-state-city';

export default function SelectCountry({ onCountrySelect }) {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
    onCountrySelect?.(selectedOption);
  };
  console.log('selected Country: ', selectedCountry);
  useEffect(() => {
    const allCountries = Country.getAllCountries().map((country) => ({
      value: country.isoCode,
      label: country.name,
    }));
    setCountries(allCountries);
    // console.log('Fetched Countries: ', allCountries);
  }, []);
  console.log('Countries: ', countries);

  return (
    <div>
      <label>
        Country
        <Select
          options={countries}
          value={selectedCountry}
          onChange={handleCountryChange}
        />
      </label>
    </div>
  );
}
