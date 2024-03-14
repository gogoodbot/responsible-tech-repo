'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';

const ResourceForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    focousArea: '',
    summary: '',
    link: '',
    post: '',
    notes: '',
    format: '',
    tags: '',
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
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex w-full max-w-7xl items-center space-x-2 '
    >
      <Input
        name='name'
        type='text'
        placeholder='Name'
        onChange={handleChange}
        value={formData.name}
        className='px-4 border border-gray-300 rounded-md'
      />
      {/* <Input
        htmlFor='focusArea'
        type='text'
        placeholder='Focus Area'
        onChange={handleChange}
        value={formData.focusArea}
        className='px-4 border border-gray-300 rounded-md'
      /> */}
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
