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
import useForm from '../useForm';

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

  if (!value) {
    return 'This field is required';
  }

  return null;
};

const ErrorMessage = ({ error }) => {
  if (!error) return null;
  return <p className='text-red-500'>{error}</p>;
};

const TestForm = () => {
  const {
    formData,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    handleTags,
    selectedTags,
  } = useForm(initialState, validateField);

  return (
    <form
      onSubmit={handleSubmit}
      className='w-full max-w-7xl items-center space-y-2 '
    >
      <label>
        Name
        <Input
          name='name'
          type='text'
          onChange={handleChange}
          onBlur={handleBlur}
          value={formData.name}
          className='px-4 border border-gray-300 rounded-md'
          required
        />
        <ErrorMessage error={errors.name} />
      </label>
      {errors.name && <p className='text-red-500'>{errors.name}</p>}

      <label>
        Focus Area
        <Input
          name='focusArea'
          type='text'
          onChange={handleChange}
          onBlur={handleBlur}
          value={formData.focusArea}
          className='px-4 border border-gray-300 rounded-md'
          required
        />
        <ErrorMessage error={errors.name} />
      </label>
      {errors.focusArea && <p className='text-red-500'>{errors.focusArea}</p>}

      <label>
        Summary
        <Input
          name='summary'
          type='text'
          onChange={handleChange}
          onBlur={handleBlur}
          value={formData.summary}
          className='px-4 border border-gray-300 rounded-md'
          required
        />
        <ErrorMessage error={errors.name} />
      </label>
      {errors.summary && <p className='text-red-500'>{errors.summary}</p>}

      <label>
        Link
        <Input
          name='link'
          type='url'
          onChange={handleChange}
          onBlur={handleBlur}
          value={formData.link}
          className='px-4 border border-gray-300 rounded-md'
          required
        />
        <ErrorMessage error={errors.name} />
      </label>
      {errors.link && <p className='text-red-500'>{errors.link}</p>}

      <label>
        Post
        <Input
          name='post'
          type='text'
          onChange={handleChange}
          onBlur={handleBlur}
          value={formData.post}
          className='px-4 border border-gray-300 rounded-md'
          required
        />
        <ErrorMessage error={errors.name} />
      </label>
      {errors.post && <p className='text-red-500'>{errors.post}</p>}

      <label>
        Notes
        <Input
          name='notes'
          type='text'
          onChange={handleChange}
          onBlur={handleBlur}
          value={formData.notes}
          className='px-4 border border-gray-300 rounded-md'
          required
        />
        <ErrorMessage error={errors.name} />
      </label>
      {errors.notes && <p className='text-red-500'>{errors.notes}</p>}

      <label>
        Format
        <Input
          name='format'
          type='text'
          onChange={handleChange}
          onBlur={handleBlur}
          value={formData.format}
          className='px-4 border border-gray-300 rounded-md'
          required
        />
        <ErrorMessage error={errors.name} />
      </label>
      {errors.format && <p className='text-red-500'>{errors.format}</p>}

      <div className='form-group space-y-2'>
        <label htmlFor='tags' className='sr-only'>
          Tags
          <ErrorMessage error={errors.name} />
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

      <label>
        Username
        <Input
          name='username'
          type='text'
          onChange={handleChange}
          onBlur={handleBlur}
          value={formData.username}
          className='px-4 border border-gray-300 rounded-md'
          required
        />
        <ErrorMessage error={errors.name} />
      </label>
      {errors.username && <p className='text-red-500'>{errors.username}</p>}

      <label>
        Password
        <Input
          name='password'
          type='password'
          onChange={handleChange}
          onBlur={handleBlur}
          value={formData.password}
          className='px-4 border border-gray-300 rounded-md'
          required
        />
        <ErrorMessage error={errors.name} />
      </label>
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

export default TestForm;
