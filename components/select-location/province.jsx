import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { State } from 'country-state-city';

export default function SelectProvince({ onProvinceSelect, countryCode }) {
  const [province, setProvince] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState(null);

  const handleProvinceChange = (selectedOption) => {
    setSelectedProvince(selectedOption);
    onProvinceSelect?.(selectedOption);
  };
  console.log('selected Province: ', selectedProvince);
  useEffect(() => {
    const allProvinces = State.getStatesOfCountry(countryCode).map(
      (province) => ({
        value: province.isoCode,
        label: province.name,
      })
    );
    setProvince(allProvinces);
    console.log('Fetched Provinces: ', allProvinces);
  }, [countryCode]);
  console.log('Provinces: ', province);

  return (
    <div>
      <label>
        Province
        <Select
          options={province}
          value={selectedProvince}
          onChange={handleProvinceChange}
        />
      </label>
    </div>
  );
}
