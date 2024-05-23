'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Tags } from '../api-data';

const ResourceForm = () => {
  const initialState = {
    name: '',
    focusArea: '',
    summary: '',
    link: '',
    post: '',
    notes: '',
    format: '',
    tags: [],
    username: '',
    password: '',
  };
  const [selectedTags, setSelectedTags] = useState([]);
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    const regexPatterns = {
      name: /^[A-Za-z\s]{2,50}$/,
      focusArea: /^[A-Za-z\s]{3,50}$/,
      summary: /^.{5,10000}$/,
      link: /^(https?:\/\/[^\s/$.?#].[^\s]*)$/,
      post: /^.{1,200}$/,
      notes: /^.{1,200}$/,
      format: /^[A-Za-z\s]{1,50}$/,
      username: /^[A-Za-z0-9_]{3,20}$/,
      password: /^[0-9].{4,6}$/,
    };

    console.log('Validating field:', name, value);
    console.log('Available regex patterns:', regexPatterns);
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

    return null;
  };

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

    // Check if at least one tag is selected
    if (selectedTags.length === 0) {
      newErrors.tags = 'Please select at least one tag.';
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
    {
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
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='w-full max-w-7xl items-center space-y-2 '
    >
      <Input
        name='name'
        type='text'
        placeholder='Name'
        onChange={handleChange}
        value={formData.name}
        className='px-4 border border-gray-300 rounded-md'
        required
      />
      {errors.name && <p className='text-red-500'>{errors.name}</p>}

      <Input
        name='focusArea'
        type='text'
        placeholder='Focus Area'
        onChange={handleChange}
        value={formData.focusArea}
        className='px-4 border border-gray-300 rounded-md'
        required
      />
      {errors.focusArea && <p className='text-red-500'>{errors.focusArea}</p>}

      <Input
        name='summary'
        type='text'
        placeholder='Summary'
        onChange={handleChange}
        value={formData.summary}
        className='px-4 border border-gray-300 rounded-md'
        required
      />
      {errors.summary && <p className='text-red-500'>{errors.summary}</p>}

      <Input
        name='link'
        type='url'
        placeholder='Link'
        onChange={handleChange}
        value={formData.link}
        className='px-4 border border-gray-300 rounded-md'
        required
      />
      {errors.link && <p className='text-red-500'>{errors.link}</p>}

      <Input
        name='post'
        type='text'
        placeholder='Post'
        onChange={handleChange}
        value={formData.post}
        className='px-4 border border-gray-300 rounded-md'
        required
      />
      {errors.post && <p className='text-red-500'>{errors.post}</p>}

      <Input
        name='notes'
        type='text'
        placeholder='Notes'
        onChange={handleChange}
        value={formData.notes}
        className='px-4 border border-gray-300 rounded-md'
        required
      />
      {errors.notes && <p className='text-red-500'>{errors.notes}</p>}

      <Input
        name='format'
        type='text'
        placeholder='Format'
        onChange={handleChange}
        value={formData.format}
        className='px-4 border border-gray-300 rounded-md'
        required
      />
      {errors.format && <p className='text-red-500'>{errors.format}</p>}

      <div className='form-group space-y-2'>
        <label htmlFor='tags' className='sr-only'>
          Tags
        </label>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='outline'>
              <span style={{ color: 'gray' }}>Select Tags</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            {Tags.map((tag) => (
              <DropdownMenuItem key={tag.id} onClick={() => handleTags(tag)}>
                {tag.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div>
        <ul>
          {formData.tags.map((tag) => (
            <li key={tag.id}>{tag.name}</li>
          ))}
        </ul>
        {errors.tags && <p className='text-red-500'>{errors.tags}</p>}
      </div>

      <Input
        name='username'
        type='text'
        placeholder='Username'
        onChange={handleChange}
        value={formData.username}
        className='px-4 border border-gray-300 rounded-md'
        required
      />
      {errors.username && <p className='text-red-500'>{errors.username}</p>}

      <Input
        name='password'
        type='password'
        placeholder='Password'
        onChange={handleChange}
        value={formData.password}
        className='px-4 border border-gray-300 rounded-md'
        required
      />
      {errors.password && <p className='text-red-500'>{errors.password}</p>}

      <Button
        variant='ghost'
        className='outline-none cursor-pointer border-2 border-black rounded-md text-white bg-black px-5 py-3 text-center transition duration-150 ease-in-out hover:bg-goodbot-primary-blue hover:border-goodbot-primary-blue hover:text-whit  dark:bg-white dark:text-black dark:border-white dark:hover:bg-goodbot-primary-blue dark:hover:border-goodbot-primary-blue dark:hover:text-white'
        type='submit'
      >
        Submit Form
      </Button>
    </form>
  );
};

export default ResourceForm;
