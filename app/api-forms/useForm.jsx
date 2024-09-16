import { useState, useEffect } from 'react';

const useForm = (initialState, regexPatterns) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const [selectedTags, setSelectedTags] = useState([]);
  const [countryCode, setCountryCode] = useState('');

  const generalFieldClassName = 'px-4 border border-gray-300 rounded-md w-4/5';
  const generalButtonClassName =
    'outline-none cursor-pointer border-2 border-black rounded-md text-white bg-black px-5 py-3 text-center transition duration-150 ease-in-out';
  const customErrorMessages = {
    name: {
      required: 'Name is required.',
      invalid: 'Name must be between 2 and 50 alphabetic characters.',
    },
    focusArea: {
      required: 'Focus area is required.',
      invalid: 'Focus area must be between 2 and 50 alphabetic characters.',
    },
    summary: {
      required: 'Summary is required.',
      invalid: 'Summary must be between 5 and 10000 characters.',
    },
    link: {
      required: 'Link is required.',
      invalid: 'Please enter a valid URL.',
    },
    post: {
      required: 'Post is required.',
      invalid: 'Post must be between 1 and 1000 characters.',
    },
    notes: {
      required: 'Notes are required.',
      invalid: 'Notes must be between 1 and 1000 characters.',
    },
    format: {
      required: 'Format is required.',
      invalid: 'Format must be between 2 and 50 alphabetic characters.',
    },
    username: {
      required: 'Username is required.',
      invalid: 'Username must be between 3 and 20 alphanumeric characters.',
    },
    password: {
      required: 'Password is required.',
    },
    country: {
      required: 'Country must be selected.',
    },
    state: {
      required: 'State/Province must be selected.',
    },
    city: {
      required: 'City must be selected.',
    },
  };

  const validateField = (name, value) => {
    if (!value) {
      return customErrorMessages[name]?.required || 'This field is required';
    }

    return null;
  };

  const debouncedValidateField = (name, value) => {
    console.log('debounced: ', name, value);
    const error = validateField(name, value);

    setErrors((prevState) => ({
      ...prevState,
      [name]: error,
    }));

    console.log('name: ', name, ' ', value);
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleNameChange = (e) => {
    const { name, value } = e.target;

    // setFormData((prevState) => ({
    //   ...prevState,
    //   [name]: value,
    // }));

    debouncedValidateField(name, value);
  };

  function handleCountryChange(selectedOption) {
    const { label } = selectedOption;

    setCountryCode(selectedOption.value);
    debouncedValidateField('country', label);
  }
  // function handleCountrySelect(selectedOption) {

  // }

  // const handleCountryChange = (locationData) => {
  //   debouncedValidateField('country', locationData.country);

  //   // setFormData((prevState) => ({
  //   //   ...prevState,
  //   //   country: locationData.country,
  //   // }));
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};

    Object.keys(formData).forEach((key) => {
      console.log('Form Data: ', formData);
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
      }
    });

    // Check if at least one tag is selected
    if (formData.tags?.length === 0) {
      newErrors.tags = customErrorMessages.tags.required;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      console.log(newErrors);
      return;
    }

    setFormData(initialState);
    setSelectedTags([]);
    setErrors({});
  };

  return {
    formData,
    errors,
    handleNameChange,
    // handleLocationChange,
    handleCountryChange,
    // handleBlur,
    handleSubmit,
    // handleTags,
    // resetForm,
    // selectedTags,
    generalFieldClassName,
    generalButtonClassName,
  };
};

export default useForm;
