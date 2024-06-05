import { useState, useEffect, useCallback } from 'react';
import debounce from 'lodash/debounce';

const useForm = (initialState, regexPatterns) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [selectedTags, setSelectedTags] = useState([]);

  const validateField = (name, value) => {
    if (name === 'tags') {
      // Example of custom validation logic for tags if needed
      if (value.length === 0) {
        return 'At least one tag must be selected.';
      }
      return null;
    }

    if (!regexPatterns[name]) {
      console.error(`No regex pattern defined for field: ${name}`);
      return `${name} has no validation rule.`;
    }

    if (!regexPatterns[name].test(value)) {
      return `${name} is invalid.`;
    }

    if (!value) {
      return 'This field is required';
    }

    return null;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    debouncedValidateField(name, value);
  };

  const debouncedValidateField = useCallback(
    debounce((name, value) => {
      const error = validateField(name, value);

      setErrors((prevState) => ({
        ...prevState,
        [name]: error,
      }));

      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }, 300),
    [] // Dependencies
  );

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);

    setErrors((prevState) => ({
      ...prevState,
      [name]: error,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};

    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
      }
    });

    //  Check if at least one tag is selected
    if (selectedTags.length === 0) {
      newErrors.tag = 'Please select at least one tag.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // submit your data to your API
    console.log(formData);
    setErrors({});
    alert('Your form has been submitted. Thank you!');
    setFormData(initialState);
    setSelectedTags([]);
  };

  useEffect(() => {
    if (selectedTags.length > 0) {
      setErrors((prevState) => ({
        ...prevState,
        tags: null,
      }));
    }
  }, [selectedTags]);

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      tags: selectedTags,
    }));
  }, [selectedTags]);

  const handleTags = (tag) => {
    setSelectedTags((currentTags) => {
      const newTags = currentTags.some((t) => t.id === tag.id)
        ? currentTags.filter((t) => t.id !== tag.id)
        : [...currentTags, tag];

      // Clear the tags error if there are any selected tags
      if (newTags.length > 0) {
        setErrors((prevState) => ({
          ...prevState,
          tags: null,
        }));
      }

      return newTags;
    });
  };

  const resetForm = () => {
    setFormData(initialState);
    setSelectedTags([]);
    setErrors({});
  };

  return {
    formData,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    handleTags,
    resetForm,
    selectedTags,
  };
};

export default useForm;
