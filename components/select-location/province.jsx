import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { State } from 'country-state-city';

export default function SelectProvince({ onProvinceSelect, countryCode }) {
  const [provinces, setProvinces] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState(null);

  const handleProvinceChange = (selectedOption) => {
    setSelectedProvince(selectedOption);
    onProvinceSelect?.(selectedOption);
  };

  useEffect(() => {
    setSelectedProvince(null);
    const allProvinces = State.getStatesOfCountry(countryCode).map(
      (province) => ({
        value: province.isoCode,
        label: province.name,
      })
    );

    setProvinces(allProvinces);
    console.log('Fetched Provinces: ', allProvinces);
  }, [countryCode]);

  return (
    <div>
      <label>
        Province
        <Select
          options={provinces}
          value={selectedProvince}
          onChange={handleProvinceChange}
        />
      </label>
    </div>
  );
}
