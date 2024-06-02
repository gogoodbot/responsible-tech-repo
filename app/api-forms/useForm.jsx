import { useState, useEffect } from 'react';

const useForm = (initialState, validateField) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [selectedTags, setSelectedTags] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);

    setErrors((prevState) => ({
      ...prevState,
      [name]: error,
    }));

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
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
      newErrors.tag = "Please select at least one tag.";
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

  return {
    formData,
    errors,
    selectedTags,
    handleChange,
    handleSubmit,
    handleTags,
    setFormData,
    setSelectedTags,
  };
};

export default useForm;