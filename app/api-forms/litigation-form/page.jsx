'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tags, REGEX_PATTERNS } from '../api-data';
import useForm from '../useForm';
import SelectCountry from '@/components/select-location/select-country';
import { submitToLitigation } from '../submit-handler';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useEffect, useState } from 'react';

const initialState = {
  created_by: '',
  created_on: '',
  modified_by: '',
  modified_on: '',
  litigation_id: '',
  name: '',
  link: '',
  summary: '',
  country: '',
  status: '',
  mandate: '',
  start_date: '', // TODO: startDate: '' >> TODO: fix it in database
  jurisdiction: '',
  tags: [], // TODO: Get them from API
};

const ErrorMessage = ({ error }) => {
  if (!error) return null;
  return <p className='text-red-500'>{error}</p>;
};

const LitigationForm = () => {
  const {
    formData,
    setFormData,
    errors,
    handleChange,
    handleCountryChange,
    selectedCountry,
    handleBlur,
    handleSubmit,
    handleTags,
    handleResetForm,
    generalFieldClassName,
    generalButtonClassName,
  } = useForm(initialState, REGEX_PATTERNS, submitToLitigation);

  const [isUpdate] = useState(false);

  useEffect(() => {
    if (!formData.litigation_id) {
      setFormData((prev) => ({
        ...prev,
        litigation_id: crypto.randomUUID(),
      }));
    }
  }, [formData.litigation_id, setFormData]);

  return (
    <>
      <ReactQueryDevtools initialIsOpen={false} />
      <div className='flex items-center justify-center min-h-screen p-4'>
        <div className='w-full max-w-7xl bg-white p-8 rounded-md shadow-md'>
          <h1 className='text-3xl font-bold my-8'>Litigation Form</h1>
          <form
            onSubmit={handleSubmit}
            className='w-full max-w-7xl bg-white p-8 rounded-md space-y-4'
          >
            <label className='pb-2 block text-lg text-gray-600'>
              Country
              <SelectCountry
                onCountrySelect={handleCountryChange}
                selectedCountry={selectedCountry}
              />
              <ErrorMessage error={errors.country} />
            </label>

            <label className='pb-2 block text-lg text-gray-600'>
              Name
              <Input
                name='name'
                type='text'
                onChange={handleChange}
                onBlur={handleBlur}
                value={formData.name} // ADD A CONDITION: if UPDATE ? initialState : formData
                // value={initialState.name} // I can fill up the value from what I get from supabase
                className={generalFieldClassName}
                required
              />
              <ErrorMessage error={errors.name} />
            </label>

            <label className='pb-2 block text-lg text-gray-600'>
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

            <label className='pb-2 block text-lg text-gray-600'>
              Summary
              <div>
                <textarea
                  name='summary'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={formData.summary}
                  className={`${generalFieldClassName} h-40 resize-y`}
                  placeholder='Provide a detailed summary...'
                  required
                />
              </div>
              <ErrorMessage error={errors.summary} />
            </label>
            <label className='pb-2 block text-lg text-gray-600'>
              Status
              <Input
                name='status'
                type='text'
                onChange={handleChange}
                onBlur={handleBlur}
                value={formData.status}
                className={generalFieldClassName}
                required
              />
              <ErrorMessage error={errors.status} />
            </label>

            <label className='pb-2 block text-lg text-gray-600'>
              Mandate
              <Input
                name='mandate'
                type='text'
                onChange={handleChange}
                onBlur={handleBlur}
                value={formData.mandate}
                className={generalFieldClassName}
                // required
              />
              <ErrorMessage error={errors.mandate} />
            </label>

            <label className='pb-2 block text-lg text-gray-600'>
              Start Date
              <Input
                name='start_date'
                type='date'
                placeholder='YYYY-MM-DD'
                onChange={handleChange}
                onBlur={handleBlur}
                value={formData.start_date}
                className={generalFieldClassName}
                required
              />
              <ErrorMessage error={errors.start_date} />
            </label>

            <label className='pb-2 block text-lg text-gray-600'>
              Jurisdiction
              <Input
                name='jurisdiction'
                type='text'
                onChange={handleChange}
                onBlur={handleBlur}
                value={formData.jurisdiction}
                className={generalFieldClassName}
                required
              />
              <ErrorMessage error={errors.jurisdiction} />
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
              {/* <ErrorMessage error={errors.tags} /> */}
            </div>
            <div>
              <ul>
                {formData.tags.map((tag) => (
                  <li key={tag.id}>{tag.name}</li>
                ))}
              </ul>
            </div>

            <label className='pb-2 block text-lg text-gray-600'>
              Litigation id
              <Input
                name='litigation_id'
                disabled
                type='text' // make it conditionally retrived from BE if isUpdate
                onChange={handleChange}
                onBlur={handleBlur}
                value={formData.litigation_id} // ADD A CONDITION: if UPDATE ? initialState : formData
                // value={initialState.name} // I can fill up the value from what I get from supabase
                className={generalFieldClassName}
                required
              />
            </label>

            <label className='pb-2 block text-lg text-gray-600'>
              Created by
              <Input
                name='created_by'
                type='text'
                onChange={handleChange}
                onBlur={handleBlur}
                value={formData.created_by} // ADD A CONDITION: if UPDATE ? initialState : formData
                // value={initialState.name} // I can fill up the value from what I get from supabase
                className={generalFieldClassName}
                required
              />
            </label>

            <label className='pb-2 block text-lg text-gray-600'>
              Created on
              <Input
                name='created_on'
                type='datetime-local'
                onChange={handleChange}
                onBlur={handleBlur}
                value={
                  isUpdate
                    ? formData.created_on // For update, use existing data
                    : formData.created_on || new Date().toISOString() // For new entry, use current datetime in ISO format
                } // ADD A CONDITION: if UPDATE ? initialState : formData
                // value={initialState.name} // I can fill up the value from what I get from supabase
                className={generalFieldClassName}
                required
              />
            </label>

            {/* <ErrorMessage error={errors.name} /> */}
            <label className='pb-2 block text-lg text-gray-600'>
              Modified on
              <Input
                name='modified_on'
                type='datetime-local'
                onChange={handleChange}
                onBlur={handleBlur}
                value={
                  isUpdate
                    ? formData.modified_on || new Date().toISOString() // For update, use existing data
                    : null // For new entry, use current datetime in ISO format
                } // ADD A CONDITION: if UPDATE ? initialState : formData
                // value={initialState.name} // I can fill up the value from what I get from supabase
                className={generalFieldClassName}
                // required
              />
            </label>
            {/* <ErrorMessage error={errors.name} /> */}
            <label className='pb-2 block text-lg text-gray-600'>
              Modified by
              <Input
                name='modified_by'
                type='text'
                onChange={handleChange}
                onBlur={handleBlur}
                value={formData.modified_by} // ADD A CONDITION: if UPDATE ? initialState : formData
                // value={initialState.name} // I can fill up the value from what I get from supabase
                className={generalFieldClassName}
                // required
              />
              {/* <ErrorMessage error={errors.name} /> */}
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
              onClick={handleResetForm}
            >
              Reset Form
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LitigationForm;
