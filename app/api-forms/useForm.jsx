import { useState, useEffect } from 'react';
import {
  createLitigation,
  deleteLitigation,
  getLitigation,
  updateLitigation,
} from './litigation-form/apiLitigation';
import toast from 'react-hot-toast';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const useForm = (initialState, regexPatterns) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const [selectedTags, setSelectedTags] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  // const [isUpdate] = useState(true);
  const [isUpdate] = useState(false);

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
      invalid: 'Summary must be between 5 and 10000 characters.',
    },
    link: {
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

  //  <-- DATE FORMAT -->
  function formatToTimestamp() {
    const d = new Date();
    return d.toISOString().replace('T', ' ').replace('Z', '+00');
  }

  //  <-- VALIDATIONS -->
  const validateField = (name, value) => {
    if (!value) {
      return customErrorMessages[name]?.required || null;
    }

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

  //  <-- HANDLE CHANGES -->
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

  //  <-- QUERIES -->
  const queryClient = useQueryClient();

  // Create & Update a Litigation:
  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};

    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      console.log(newErrors);
      return;
    }

    if (isUpdate) {
      handleUpdate();
    } else {
      createMutate(formData);
    }

    console.log('Form Data: ', formData);
    resetForm();
  };
  function handleUpdate() {
    console.log('updateMutate fromData: ', formData);
    updateMutate(formData);
  }

  // A) Create a new Litigation
  const { mutate: createMutate, isLoading: isCreating } = useMutation({
    mutationFn: createLitigation,
    onSuccess: () => {
      toast.success('Litigatio successfuly created!');
      queryClient.invalidateQueries({ queryKey: ['Litigation'] });
    },
    onError: (err) => toast.error(err.ErrorMessage),
  });

  // B) Update a Litigation
  const { mutate: updateMutate, isLoading: isUpdating } = useMutation({
    mutationFn: updateLitigation,
    onSuccess: () => {
      toast.success('Litigation successfuly updated!');
      queryClient.invalidateQueries({ queryKey: ['Litigation'] });
    },
    onError: (err) => toast.error(err.ErrorMessage),
  });

  // Delete a Litigation:
  function handleDelete(id) {
    deleteMutate(id);
  }
  const { mutate: deleteMutate, isLoading: isDeleting } = useMutation({
    mutationFn: deleteLitigation, // mutationFn: (id) => deleteLitigation(id),
    onSuccess: () => {
      toast.success('Litigation successfuly deleted');
      queryClient.invalidateQueries({ queryKey: ['Litigation'] });
    },
    onError: (err) => toast.error(err.ErrorMessage),
  });

  // Get an existing Litigation:
  function useFetchLitigation(litigationId) {
    return useQuery(
      ['litigation', litigationId],
      () => getLitigation(litigationId),
      {
        enabled: !!litigationId,
      }
    );
  }

  // <-- HANDLE THE REST -->
  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);

    setErrors((prevState) => ({
      ...prevState,
      [name]: error,
    }));
  };

  const handleResetForm = () => {
    const confirmReset = window.confirm(
      'Are you sure you want to reset the form? All data will be lost.'
    );
    if (confirmReset) {
      resetForm();
    }
  };

  function resetForm() {
    setFormData(initialState);
    setSelectedTags([]);
    setSelectedCountry(null);
    setSelectedProvince(null);
    setSelectedCity(null);
    setErrors({});
  }

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
    useFetchLitigation,
    isUpdate,
    formatToTimestamp,
  };
};

export default useForm;
