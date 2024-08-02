import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { Country, State, City } from 'country-state-city';

const LocationSelect = ({
  onCountryChange,
  onStateChange,
  onCityChange,
  fields,
  isClear,
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

  const handleCountryChange = (selectedOption) => {
    console.log('Selected country:', selectedOption);
    setSelectedCountry(selectedOption);
    onCountryChange({
      country: selectedOption.label,
    });
  };

  const handleStateChange = (selectedOption) => {
    console.log('Selected state:', selectedOption);
    setSelectedState(selectedOption);
    onStateChange({
      country: selectedCountry.label,
      state: selectedOption.label,
    });
  };

  const handleCityChange = (selectedOption) => {
    setSelectedCity(selectedOption);
    onCityChange({
      country: selectedCountry.label,
      state: selectedState.label,
      city: selectedOption.label,
    });
  };

  // const fetchStates = (countryCode) => {
  //   setStates(
  //     State.getStatesOfCountry(countryCode).map((state) => ({
  //       value: state.isoCode,
  //       label: state.name,
  //     }))
  //   );
  // };

  // const fetchCities = (countryCode, stateCode) => {
  //   setCities(
  //     City.getCitiesOfState(countryCode, stateCode).map((city) => ({
  //       value: city.isoCode,
  //       label: city.name,
  //     }))
  //   );
  // };

  useEffect(() => {
    if (isClear) {
      setSelectedCountry(null);
      setSelectedState(null);
      setSelectedCity(null);
    }
  }, [isClear]);

  useEffect(() => {
    const allCountries = Country.getAllCountries().map((country) => ({
      value: country.isoCode,
      label: country.name,
    }));
    setCountries(allCountries);
    console.log('Fetched Countries: ', allCountries);
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      console.log('Fetching states for country:', selectedCountry.value);
      const fetchedStates = State.getStatesOfCountry(selectedCountry.value).map(
        (state) => ({
          value: state.isoCode,
          label: state.name,
        })
      );
      console.log('Fetched states:', fetchedStates);
      setStates(fetchedStates);
    } else {
      setStates([]);
    }
    setSelectedState(null);
    setCities([]);
    setSelectedCity(null);
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedState) {
      console.log('Fetching cities for state:', selectedState.value);
      const fetchedCities = City.getCitiesOfState(
        selectedCountry.value,
        selectedState.value
      ).map((city) => ({
        value: city.name,
        label: city.name,
      }));
      console.log('Fetched cities:', fetchedCities);
      setCities(fetchedCities);
    } else {
      setCities([]);
    }
    setSelectedCity(null);
  }, [selectedCountry, selectedState]);

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
            // isDisabled={!selectedCountry}
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
            // isDisabled={!selectedState}
          />
        </label>
      )}
    </div>
  );
};

export default LocationSelect;
