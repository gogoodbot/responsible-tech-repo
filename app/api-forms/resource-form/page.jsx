'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const ResourceForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    focusArea: '',
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
      className='w-full max-w-7xl items-center space-y-2 '
    >
      <Input
        name='name'
        type='text'
        placeholder='Name'
        onChange={handleChange}
        value={formData.name}
        className='px-4 border border-gray-300 rounded-md'
      />
      <Input
        name='focusArea'
        type='text'
        placeholder='Focus Area'
        onChange={handleChange}
        value={formData.focusArea}
        className='px-4 border border-gray-300 rounded-md'
      />
      <Input
        name='summary'
        type='text'
        placeholder='Summary'
        onChange={handleChange}
        value={formData.summary}
        className='px-4 border border-gray-300 rounded-md'
      />
      <Input
        name='link'
        type='text'
        placeholder='Link'
        onChange={handleChange}
        value={formData.link}
        className='px-4 border border-gray-300 rounded-md'
      />
      <Input
        name='post'
        type='text'
        placeholder='Post'
        onChange={handleChange}
        value={formData.post}
        className='px-4 border border-gray-300 rounded-md'
      />
      <Input
        name='notes'
        type='text'
        placeholder='Notes'
        onChange={handleChange}
        value={formData.notes}
        className='px-4 border border-gray-300 rounded-md'
      />
      <Input
        name='format'
        type='text'
        placeholder='Format'
        onChange={handleChange}
        value={formData.format}
        className='px-4 border border-gray-300 rounded-md'
      />
      {/* <Input
        name='tags'
        type='text'
        placeholder='Tags'
        onChange={handleChange}
        value={formData.tags}
        className='px-4 border border-gray-300 rounded-md'
      /> */}
      <div className='form-group space-y-2'>
        <label htmlFor='tags' className='sr-only'>
          Tags
        </label>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='outline'>
              <span style={{ color: 'gray' }}>Tag</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuItem
              onClick={() => setFormData({ ...formData, tags: 'Tag-1' })}
            >
              Tag-1
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setFormData({ ...formData, tags: 'Tag-2' })}
            >
              Tag-2
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setFormData({ ...formData, tags: 'Tag-3' })}
            >
              Tag-3
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <p>{formData.tags}</p>{' '}
        {/* this might need to a <ul> if there are supposed to be more than one tag picked */}
      </div>
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
