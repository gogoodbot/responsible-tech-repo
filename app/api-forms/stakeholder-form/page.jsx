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

const StakeholderForm = () => {
  const initialState = {
    name: '',
    summary: '',
    role: '',
    email: '',
    phone: '',
    website: '',
    country: '',
    state_province: '',
    tags: [],
    username: '',
    password: '',
  };
  const [selectedTags, setSelectedTags] = useState([]);
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // submit your data to your API

    // Check if at least one tag is selected
    if (selectedTags.length === 0) {
      // Show an error message to the user
      alert('Please select at least one tag.'); // Consider using a more user-friendly way to show errors
      return; // Prevent form submission
    }

    console.log(formData);
    alert('Your form has been submitted. Thank you!');
    setFormData(initialState);
  };

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      tags: selectedTags,
    }));
  }, [selectedTags]);

  const handleTags = (tag) => {
    {
      setSelectedTags((currentTags) => {
        if (currentTags.some((t) => t.id === tag.id)) {
          return currentTags.filter((t) => t.id !== tag.id);
        } else {
          return [...currentTags, tag];
        }
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
      <Input
        name='summary'
        type='text'
        placeholder='Summary'
        onChange={handleChange}
        value={formData.summary}
        className='px-4 border border-gray-300 rounded-md'
        required
      />
      <Input
        name='role'
        type='text'
        placeholder='Role'
        onChange={handleChange}
        value={formData.role}
        className='px-4 border border-gray-300 rounded-md'
        required
      />
      <Input
        //  TODO: add .com or so to ajax
        name='email'
        type='email'
        placeholder='Email'
        onChange={handleChange}
        value={formData.email}
        className='px-4 border border-gray-300 rounded-md'
        required
      />
      <Input
        name='phone'
        type='phone'
        placeholder='Phone'
        onChange={handleChange}
        value={formData.phone}
        className='px-4 border border-gray-300 rounded-md'
        required
      />
      <Input
        name='website'
        type='url'
        placeholder='Website'
        onChange={handleChange}
        value={formData.website}
        className='px-4 border border-gray-300 rounded-md'
        required
      />
      <Input
        // TODO: get the country name from an api or list, make it a dropdown selection
        name='country'
        type='text'
        placeholder='Country'
        onChange={handleChange}
        value={formData.country}
        className='px-4 border border-gray-300 rounded-md'
        required
      />
      <Input
        // TODO: get the state_province name from an api or list, make it a dropdown selection
        name='state_province'
        type='text'
        placeholder='State Province'
        onChange={handleChange}
        value={formData.state_province}
        className='px-4 border border-gray-300 rounded-md'
        required
      />
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
      <Input
        name='password'
        type='password'
        placeholder='Password'
        onChange={handleChange}
        value={formData.password}
        className='px-4 border border-gray-300 rounded-md'
        required
      />

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

export default StakeholderForm;
