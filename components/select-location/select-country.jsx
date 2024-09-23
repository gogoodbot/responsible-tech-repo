import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { Country } from 'country-state-city';

export default function SelectCountry({ onCountrySelect, selectedCountry }) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const allCountries = Country.getAllCountries().map((country) => ({
      value: country.isoCode,
      label: country.name,
    }));
    setCountries(allCountries);
  }, []);

  return (
    <div>
      <label>
        Country
        <Select
          options={countries}
          value={selectedCountry}
          onChange={onCountrySelect}
        />
      </label>
    </div>
  );
}
