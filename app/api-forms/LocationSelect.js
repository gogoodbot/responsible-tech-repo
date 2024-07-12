import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import axios from 'axios';

const LocationSelect = ({ onLocationChange, fields }) => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    setCountries(countryList().getData());
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

  const fetchStates = async (countryCode) => {
    // Fetch states using an API
    try {
      const response = await axios.get(
        `https://example-api.com/states?country=${countryCode}`
      );
      setStates(
        response.data.states.map((state) => ({
          value: state.code,
          label: state.name,
        }))
      );
    } catch (error) {
      console.error('Error fetching states:', error);
    }
  };

  const fetchCities = async (countryCode, stateCode) => {
    // Fetch cities using an API
    try {
      const response = await axios.get(
        `https://example-api.com/cities?country=${countryCode}&state=${stateCode}`
      );
      setCities(
        response.data.cities.map((city) => ({
          value: city.code,
          label: city.name,
        }))
      );
    } catch (error) {
      console.error('Error fetching cities:', error);
    }
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
          />
        </label>
      )}
    </div>
  );
};

export default LocationSelect;
