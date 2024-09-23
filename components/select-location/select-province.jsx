import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { State } from 'country-state-city';

export default function SelectProvince({
  onProvinceSelect,
  countryCode,
  selectedProvince,
}) {
  const [provinces, setProvinces] = useState([]);

  useEffect(() => {
    const allProvinces = State.getStatesOfCountry(countryCode).map(
      (province) => ({
        value: province.isoCode,
        label: province.name,
      })
    );

    setProvinces(allProvinces);
  }, [countryCode]);

  return (
    <div>
      <Select
        options={provinces}
        value={selectedProvince}
        onChange={onProvinceSelect}
        placeholder='Select Province'
      />
    </div>
  );
}
