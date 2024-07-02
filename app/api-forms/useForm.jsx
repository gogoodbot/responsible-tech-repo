import { useState, useEffect, useCallback } from 'react';
import debounce from 'lodash/debounce';
import { custom } from 'zod';

const useForm = (initialState, regexPatterns) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [selectedTags, setSelectedTags] = useState([]);
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
    tags: {
      required: 'At least one tag must be selected.',
    },
  };

  const validateField = (name, value) => {
    if (name === 'tags') {
      // Example of custom validation logic for tags if needed
      if (value.length === 0) {
        return customErrorMessages.tags.required;
      }
      return null;
    }
    if (!value) {
      return customErrorMessages[name]?.required || 'This field is required';
    }

    if (name !== 'password' && regexPatterns[name]) {
      if (!regexPatterns[name].test(value)) {
        return customErrorMessages[name]?.invalid || `${name} is invalid.`;
      }
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
      newErrors.tag = customErrorMessages.tags.required;
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
    const confirmReset = window.confirm(
      'Are you sure you want to reset the form? All data will be lost.'
    );
    if (confirmReset) {
      setFormData(initialState);
      setSelectedTags([]);
      setErrors({});
    }
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
    generalFieldClassName,
    generalButtonClassName,
  };
};

export default useForm;
