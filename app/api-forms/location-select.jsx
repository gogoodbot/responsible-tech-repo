import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { Country, State, City } from 'country-state-city';

const LocationSelect = ({
  onLocationChange,
  fields,
  countryRequired,
  stateRequired,
  cityRequired,
}) => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    setCountries(
      Country.getAllCountries().map((country) => ({
        value: country.isoCode,
        label: country.name,
      }))
    );
  }, []);

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
    setSelectedState(null);
    setSelectedCity(null);
    setStates([]);
    setCities([]);
    fetchStates(selectedOption.value);
    onLocationChange({
      country: selectedOption.label,
      state: '',
      city: '',
    });
  };

  const handleStateChange = (selectedOption) => {
    setSelectedState(selectedOption);
    setSelectedCity(null);
    setCities([]);
    fetchCities(selectedCountry.value, selectedOption.value);
    onLocationChange({
      country: selectedCountry.label,
      state: selectedOption.label,
      city: '',
    });
  };

  const handleCityChange = (selectedOption) => {
    setSelectedCity(selectedOption);
    onLocationChange({
      country: selectedCountry.label,
      state: selectedState.label,
      city: selectedOption.label,
    });
  };

  const fetchStates = (countryCode) => {
    setStates(
      State.getStatesOfCountry(countryCode).map((state) => ({
        value: state.isoCode,
        label: state.name,
      }))
    );
  };

  const fetchCities = (countryCode, stateCode) => {
    setCities(
      City.getCitiesOfState(countryCode, stateCode).map((city) => ({
        value: city.isoCode,
        label: city.name,
      }))
    );
  };

  return (
    <div>
      {fields.includes('country') && (
        <label>
          Country
          <Select
            options={countries}
            value={selectedCountry}
            onChange={handleCountryChange}
            {...(countryRequired && require)}
          />
        </label>
      )}

      {fields.includes('state') && (
        <label>
          State/Province
          <Select
            options={states}
            value={selectedState}
            onChange={handleStateChange}
            isDisabled={!selectedCountry}
            {...(stateRequired && require)}
          />
        </label>
      )}

      {fields.includes('city') && (
        <label>
          City
          <Select
            options={cities}
            value={selectedCity}
            onChange={handleCityChange}
            isDisabled={!selectedState}
            {...(cityRequired && require)}
          />
        </label>
      )}
    </div>
  );
};

export default LocationSelect;
