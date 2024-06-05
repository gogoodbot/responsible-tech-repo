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
  post: /^.{1,1000}$/,
  notes: /^.{1,1000}$/,
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
    resetForm,
    selectedTags,
    generalFieldClassName,
    generalButtonClassName,
  } = useForm(initialState, regexPatterns);

  return (
    <div className='flex items-center justify-center min-h-screen p-4'>
      <form
        onSubmit={handleSubmit}
        className='w-full max-w-7xl bg-white p-8 rounded-md shadow-md space-y-4'
      >
        <label className='pb-2 block'>
          Name
          <Input
            name='name'
            type='text'
            onChange={handleChange}
            onBlur={handleBlur}
            value={formData.name}
            className={generalFieldClassName}
            required
          />
          <ErrorMessage error={errors.name} />
        </label>

        <label className='pb-2 block'>
          Focus Area
          <Input
            name='focusArea'
            type='text'
            onChange={handleChange}
            onBlur={handleBlur}
            value={formData.focusArea}
            className={generalFieldClassName}
            required
          />
          <ErrorMessage error={errors.focusArea} />
        </label>

        <label className='pb-2 block'>
          Summary
          <div>
            <textarea
              name='summary'
              onChange={handleChange}
              onBlur={handleBlur}
              value={formData.summary}
              className={`${generalFieldClassName} h-40 resize-y`}
              required
            />
          </div>
          <ErrorMessage error={errors.summary} />
        </label>

        <label className='pb-2 block'>
          Link
          <Input
            name='link'
            type='url'
            onChange={handleChange}
            onBlur={handleBlur}
            value={formData.link}
            className={generalFieldClassName}
            required
          />
          <ErrorMessage error={errors.link} />
        </label>

        <label className='pb-2 block'>
          Post
          <div>
            <textarea
              name='post'
              onChange={handleChange}
              onBlur={handleBlur}
              value={formData.posts}
              className={`${generalFieldClassName} h-40 resize-y`}
              required
            />
          </div>
          <ErrorMessage error={errors.post} />
        </label>

        <label className='pb-2 block'>
          Notes
          <div>
            <textarea
              name='notes'
              onChange={handleChange}
              onBlur={handleBlur}
              value={formData.notes}
              className={`${generalFieldClassName} h-40 resize-y`}
              required
            />
          </div>
          <ErrorMessage error={errors.notes} />
        </label>

        <label className='pb-2 block'>
          Format
          <Input
            name='format'
            type='text'
            onChange={handleChange}
            onBlur={handleBlur}
            value={formData.format}
            className={generalFieldClassName}
            required
          />
          <ErrorMessage error={errors.format} />
        </label>

        <div className='form-group space-y-2'>
          <label className='mb-2 block'>
            Tags
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className='ml-4' variant='outline'>
                  <span style={{ color: 'gray' }}>Select Tags</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end'>
                {Tags.map((tag) => (
                  <DropdownMenuItem
                    key={tag.id}
                    onClick={() => handleTags(tag)}
                  >
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

        <label className='pb-2 block'>
          Username
          <Input
            name='username'
            type='text'
            onChange={handleChange}
            onBlur={handleBlur}
            value={formData.username}
            className={generalFieldClassName}
            required
          />
          <ErrorMessage error={errors.username} />
        </label>

        <label className='pb-2 block'>
          Password
          <Input
            name='password'
            type='password'
            onChange={handleChange}
            onBlur={handleBlur}
            value={formData.password}
            className={generalFieldClassName}
            required
          />
          <ErrorMessage error={errors.password} />
        </label>

        <Button
          variant='ghost'
          className={`${generalButtonClassName} hover:bg-goodbot-primary-blue hover:border-goodbot-primary-blue hover:text-whit  dark:bg-white dark:text-black dark:border-white dark:hover:bg-goodbot-primary-blue dark:hover:border-goodbot-primary-blue dark:hover:text-white`}
          type='submit'
        >
          Submit Form
        </Button>
        <Button
          variant='ghost'
          className={`${generalButtonClassName} ml-4 hover:bg-red-600 hover:border-red-600 hover:text-whit  dark:bg-white dark:text-black dark:border-white dark:hover:bg-red-600 dark:hover:border-red-600 dark:hover:text-white`}
          type='button'
          onClick={resetForm}
        >
          Reset Form
        </Button>
      </form>
    </div>
  );
};

export default TestForm;
