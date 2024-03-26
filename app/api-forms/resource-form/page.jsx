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
  import {Tags} from '../api-data';

const ResourceForm = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    focusArea: '',
    summary: '',
    link: '',
    post: '',
    notes: '',
    format: '',
    tags: [],
    username: '',
    password: ''
  });

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
    alert("Please select at least one tag."); // Consider using a more user-friendly way to show errors
    return; // Prevent form submission
  }
    
    console.log(formData);
  };


  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      tags: selectedTags,
    }));
  }, [selectedTags]); 

  const handleTags = (tag) => {
    {
      setSelectedTags(currentTags => {
        if (currentTags.some((t) => t.id === tag.id)) {
          return [...currentTags];
        } else {
          return [...currentTags, tag];
        }
      });
    }
  }

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
        name='focusArea'
        type='text'
        placeholder='Focus Area'
        onChange={handleChange}
        value={formData.focusArea}
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
        name='link'
        type='text'
        placeholder='Link'
        onChange={handleChange}
        value={formData.link}
        className='px-4 border border-gray-300 rounded-md'
        required
      />
      <Input
        name='post'
        type='text'
        placeholder='Post'
        onChange={handleChange}
        value={formData.post}
        className='px-4 border border-gray-300 rounded-md'
        required
      />
      <Input
        name='notes'
        type='text'
        placeholder='Notes'
        onChange={handleChange}
        value={formData.notes}
        className='px-4 border border-gray-300 rounded-md'
        required
      />
      <Input
        name='format'
        type='text'
        placeholder='Format'
        onChange={handleChange}
        value={formData.format}
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
            {Tags.map(tag =>
              <DropdownMenuItem key={tag.id}
                onClick={() => handleTags(tag)}>
                {tag.name}
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
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
      <div>
        <ul>
          {formData.tags.map(tag => <li key={tag.id}>{ tag.name}</li>)}
        </ul>
      </div>
    </form>
  );
};

export default ResourceForm;
