import { useState, useEffect } from 'react';
import {
  createLitigation,
  deleteLitigation,
} from './litigation-form/apiLitigation';
import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useForm = (initialState, regexPatterns) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const [selectedTags, setSelectedTags] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

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
    // username: {
    //   required: 'Username is required.',
    //   invalid: 'Username must be between 3 and 20 alphanumeric characters.',
    // },
    // password: {
    //   required: 'Password is required.',
    // },
    country: {
      required: 'Country must be selected.',
    },
    state: {
      required: 'State/Province must be selected.',
    },
    city: {
      required: 'City must be selected.',
    },
    // tags: {
    //   required: 'At least one tag is required.',
    // },
  };

  const validateField = (name, value) => {
    // if (name === 'tags') {
    //   // Example of custom validation logic for tags if needed
    //   if (value.length === 0) {
    //     return customErrorMessages.tags.required;
    //   }
    //   return null;
    // }

    if (!value) {
      // return customErrorMessages[name]?.required || 'This field is required';
      return customErrorMessages[name]?.required || null;
    }

    // if (name !== 'password' && regexPatterns[name]) {
    //   if (!regexPatterns[name].test(value)) {
    //     return customErrorMessages[name]?.invalid || `${name} is invalid.`;
    //   }
    // }

    return null;
  };

  const debouncedValidateField = (name, value) => {
    const error = validateField(name, value);

    setErrors((prevState) => ({
      ...prevState,
      [name]: error,
    }));

    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    debouncedValidateField(name, value);
  };

  const handleCountryChange = (selectedOption) => {
    const { label } = selectedOption;

    setSelectedCountry(selectedOption);
    debouncedValidateField('country', label);
  };

  const handleProvinceChange = (selectedOption) => {
    const { label } = selectedOption;

    setSelectedProvince(selectedOption);
    debouncedValidateField('state', label);
  };

  const handleCityChange = (selectedOption) => {
    const { label } = selectedOption;

    setSelectedCity(selectedOption);
    debouncedValidateField('city', label);
  };

  useEffect(() => {
    if (selectedTags.length > 0) {
      setErrors((prevState) => ({
        ...prevState,
        tags: null,
      }));
    }
  }, [selectedTags]);

  const handleTags = (tag) => {
    setSelectedTags((currentTags) => {
      const newTags = currentTags.some((t) => t.id === tag.id)
        ? currentTags.filter((t) => t.id !== tag.id)
        : [...currentTags, tag];

      // Update formData with selected tags
      setFormData((prevFormData) => ({
        ...prevFormData,
        tags: newTags,
      }));

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

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);

    setErrors((prevState) => ({
      ...prevState,
      [name]: error,
    }));
  };

  function resetForm() {
    setFormData(initialState);
    setSelectedTags([]);
    setSelectedCountry(null);
    setSelectedProvince(null);
    setSelectedCity(null);
    setErrors({});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};

    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
      }
    });

    // Check if at least one tag is selected
    // if (formData.tags?.length === 0) {
    //   newErrors.tags = customErrorMessages.tags.required;
    // }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      console.log(newErrors);
      return;
    }

    mutate(formData);
    console.log('Form Data: ', formData);
    resetForm();
  };

  const queryClient = useQueryClient();
  function CreateLitigationRow() {
    const { mutate, isLoading: isCreating } = useMutation({
      mutationFn: createLitigation,
      onSuccess: () => {
        toast.success('Litigatio successfuly created!');
        queryClient.invalidateQueries({ queryKey: ['Litigation'] });
      },
      onError: (err) => toast.error(err.ErrorMessage),
    });
  }

  const { isLoading: isDeleting, mutate } = useMutation({
    // mutationFn: (id) => deleteLitigation(id),
    mutationFn: deleteLitigation,
    onSuccess: () => {
      toast.success('Litigation successfuly deleted');
      queryClient.invalidateQueries({ queryKey: ['Litigation'] });
    },
    onError: (err) => toast.error(err.ErrorMessage),
  });

  function handleDelete() {
    const testId = 'e1807dc0-a6bc-4da9-b503-54e1648fe41d';
    mutate(testId);
    console.log('id: ', testId, ' deleted');
  }

  const handleResetForm = () => {
    const confirmReset = window.confirm(
      'Are you sure you want to reset the form? All data will be lost.'
    );
    if (confirmReset) {
      resetForm();
    }
  };

  return {
    formData,
    setFormData,
    errors,
    handleChange,
    handleCountryChange,
    selectedCountry,
    handleProvinceChange,
    selectedProvince,
    handleCityChange,
    selectedCity,
    handleBlur,
    handleSubmit,
    handleTags,
    handleResetForm,
    selectedTags,
    generalFieldClassName,
    generalButtonClassName,
    handleDelete,
    isDeleting,
  };
};

export default useForm;
