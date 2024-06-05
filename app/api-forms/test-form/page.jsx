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
  } = useForm(initialState, regexPatterns);

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
        <ErrorMessage error={errors.focusArea} />
      </label>

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
        <ErrorMessage error={errors.summary} />
      </label>

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
        <ErrorMessage error={errors.link} />
      </label>

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
        <ErrorMessage error={errors.post} />
      </label>

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
        <ErrorMessage error={errors.notes} />
      </label>

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
        <ErrorMessage error={errors.format} />
      </label>

      <div className='form-group space-y-2'>
        <label>
          Tags
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
        </label>
        <ErrorMessage error={errors.tags} />
      </div>
      <div>
        <ul>
          {formData.tags.map((tag) => (
            <li key={tag.id}>{tag.name}</li>
          ))}
        </ul>
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
        <ErrorMessage error={errors.username} />
      </label>

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
        <ErrorMessage error={errors.password} />
      </label>

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
