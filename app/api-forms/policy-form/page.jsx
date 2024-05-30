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

const PolicyForm = () => {
  const initialState = {
    name: '',
    summary: '',
    country: '',
    type: '',
    link: '',
    status: '',
    mandate: '',
    jurisdiction: '',
    entity: '',
    sub_entity: '',
    start_date: '',
    notes: '',
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
      summary: /^.{5,10000}$/,
      country: /^[A-Za-z\s]{2,60}$/,
      type: /^[A-Za-z\s]{2,20}$/,
      link: /^(https?:\/\/[^\s/$.?#].[^\s]*)$/,
      status: /^[A-Za-z\s]{2,20}$/,
      mandate: /^[A-Za-z\s]{2,20}$/,
      jurisdiction: /^[A-Za-z\s]{2,20}$/,
      entity: /^[A-Za-z\s]{2,50}$/,
      sub_entity: /^[A-Za-z\s]{2,50}$/,
      start_date: /^\d{4}-\d{2}-\d{2}$/,
      notes: /^.{1,200}$/,
      username: /^[A-Za-z0-9_]{3,20}$/,
      password: /^[0-9].{4,6}$/,
    };

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
    }
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
        name='country'
        type='text'
        placeholder='Country'
        onChange={handleChange}
        value={formData.country}
        className='px-4 border border-gray-300 rounded-md'
        required
      />
      {errors.country && <p className='text-red-500'>{errors.country}</p>}

      <Input
        name='type'
        type='text'
        placeholder='Type'
        onChange={handleChange}
        value={formData.type}
        className='px-4 border border-gray-300 rounded-md'
        required
      />
      {errors.type && <p className='text-red-500'>{errors.type}</p>}

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
        name='status'
        type='text'
        placeholder='Status'
        onChange={handleChange}
        value={formData.status}
        className='px-4 border border-gray-300 rounded-md'
        required
      />
      {errors.status && <p className='text-red-500'>{errors.status}</p>}

      <Input
        name='mandate'
        type='text'
        placeholder='Mandate'
        onChange={handleChange}
        value={formData.mandate}
        className='px-4 border border-gray-300 rounded-md'
        required
      />
      {errors.mandate && <p className='text-red-500'>{errors.mandate}</p>}

      <Input
        name='jurisdiction'
        type='text'
        placeholder='Jurisdiction'
        onChange={handleChange}
        value={formData.jurisdiction}
        className='px-4 border border-gray-300 rounded-md'
        required
      />
      {errors.jurisdiction && <p className='text-red-500'>{errors.jurisdiction}</p>
      }

      <Input
        name='entity'
        type='text'
        placeholder='Entity'
        onChange={handleChange}
        value={formData.entity}
        className='px-4 border border-gray-300 rounded-md'
        required
      />
      {errors.entity && <p className='text-red-500'>{errors.entity}</p>}

      <Input
        name='sub_entity'
        type='text'
        placeholder='Sub_entity'
        onChange={handleChange}
        value={formData.sub_entity}
        className='px-4 border border-gray-300 rounded-md'
        required
      />
      {errors.sub_entity && <p className='text-red-500'>{errors.sub_entity}</p>}

      <Input
        name='start_date'
        type='text'
        placeholder='Start_date'
        onChange={handleChange}
        value={formData.start_date}
        className='px-4 border border-gray-300 rounded-md'
        required
      />
      {errors.start_date && <p className='text-red-500'>{errors.start_date}</p>}

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

export default PolicyForm;
