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

const OrganizationForm = () => {
  const initialState = {
    name: '',
    website: '',
    summary: '',
    legal_status: '',
    affiliation: '',
    functional_role: '',
    sector_focus: '',
    scope: '',
    communities_of_focus: '',
    geographic_mandate: '',
    hq_province: '',
    hq_city: '',
    status: '',
    stage: '',
    composition: '',
    size: '',
    established_date: '',
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
        name='affiliation'
        type='text'
        placeholder='Affiliation'
        onChange={handleChange}
        value={formData.affiliation}
        className='px-4 border border-gray-300 rounded-md'
        required
      />
      <Input
        name='type'
        type='text'
        placeholder='Type'
        onChange={handleChange}
        value={formData.type}
        className='px-4 border border-gray-300 rounded-md'
        required
      />
      <Input
        name='functional_role'
        type='text'
        placeholder='Functional role'
        onChange={handleChange}
        value={formData.functional_role}
        className='px-4 border border-gray-300 rounded-md'
        required
      />
      <Input
        name='sector_focus'
        type='text'
        placeholder='Sector focus'
        onChange={handleChange}
        value={formData.sector_focus}
        className='px-4 border border-gray-300 rounded-md'
        required
      />
      <Input
        name='scope'
        type='text'
        placeholder='Scope'
        onChange={handleChange}
        value={formData.scope}
        className='px-4 border border-gray-300 rounded-md'
        required
      />
      <Input
        name='communities_of_focus'
        type='text'
        placeholder='Communities of focus'
        onChange={handleChange}
        value={formData.communities_of_focus}
        className='px-4 border border-gray-300 rounded-md'
        required
      />
      <Input
        name='geographic_mandate'
        type='text'
        placeholder='Geographic mandate'
        onChange={handleChange}
        value={formData.geographic_mandate}
        className='px-4 border border-gray-300 rounded-md'
        required
      />
      <Input
        name='hq_province'
        type='text'
        placeholder='hq province'
        onChange={handleChange}
        value={formData.hq_province}
        className='px-4 border border-gray-300 rounded-md'
        required
      />
      <Input
        name='hq_city'
        type='text'
        placeholder='hq city'
        onChange={handleChange}
        value={formData.hq_city}
        className='px-4 border border-gray-300 rounded-md'
        required
      />
      <Input
        name='status'
        type='text'
        placeholder='Status'
        onChange={handleChange}
        value={formData.status}
        className='px-4 border border-gray-300 rounded-md'
        required
      />
      <Input
        name='stage'
        type='text'
        placeholder='Stage'
        onChange={handleChange}
        value={formData.stage}
        className='px-4 border border-gray-300 rounded-md'
        required
      />
      <Input
        name='composition'
        type='text'
        placeholder='Composition'
        onChange={handleChange}
        value={formData.composition}
        className='px-4 border border-gray-300 rounded-md'
        required
      />
      <Input
        name='size'
        type='text'
        placeholder='Size'
        onChange={handleChange}
        value={formData.size}
        className='px-4 border border-gray-300 rounded-md'
        required
      />
      <Input
        name='established_date'
        type='text'
        placeholder='Established_date'
        onChange={handleChange}
        value={formData.established_date}
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

export default OrganizationForm;
