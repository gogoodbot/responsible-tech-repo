'use client';

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

const regexPatterns = {
  name: /^[A-Za-z\s]{2,50}$/,
  summary: /^.{5,10000}$/,
  role: /^[A-Za-z\s]{2,50}$/,
  email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  phone: /^\+?[1-9]\d{1,14}$/,
  website: /^(https?:\/\/[^\s/$.?#].[^\s]*)$/,
  country: /^[A-Za-z\s]{2,60}$/,
  state_province: /^[A-Za-z\s]{2,60}$/,
  username: /^[A-Za-z0-9_]{3,20}$/,
};

const ErrorMessage = ({ error }) => {
  if (!error) return null;
  return <p className='text-red-500'>{error}</p>;
};

const StakeholderForm = () => {
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
      <div className='w-full max-w-7xl bg-white p-8 rounded-md shadow-md'>
        <h1 className='text-3xl font-bold my-8'>Stakeholder Form</h1>
        <form
          onSubmit={handleSubmit}
          className='w-full max-w-7xl bg-white p-8 rounded-md space-y-4'
        >
          <label className='pb-2 block text-lg text-gray-600'>
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

          <label className='pb-2 block text-lg text-gray-600'>
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

          <label className='pb-2 block text-lg text-gray-600'>
            Role
            <Input
              name='role'
              type='text'
              onChange={handleChange}
              onBlur={handleBlur}
              value={formData.role}
              className={generalFieldClassName}
              required
            />
            <ErrorMessage error={errors.role} />
          </label>

          <label className='pb-2 block text-lg text-gray-600'>
            Email
            <Input
              name='email'
              type='email'
              onChange={handleChange}
              onBlur={handleBlur}
              value={formData.email}
              className={generalFieldClassName}
              required
            />
            <ErrorMessage error={errors.email} />
          </label>

          <label className='pb-2 block text-lg text-gray-600'>
            Phone
            <Input
              name='phone'
              type='phone'
              onChange={handleChange}
              onBlur={handleBlur}
              value={formData.phone}
              className={generalFieldClassName}
              required
            />
            <ErrorMessage error={errors.phone} />
          </label>

          <label className='pb-2 block text-lg text-gray-600'>
            Website
            <Input
              name='website'
              type='url'
              onChange={handleChange}
              onBlur={handleBlur}
              value={formData.website}
              className={generalFieldClassName}
              required
            />
            <ErrorMessage error={errors.website} />
          </label>

          <label className='pb-2 block text-lg text-gray-600'>
            Country
            <Input
              // TODO: get the country name from an api or list, make it a dropdown selection
              name='country'
              type='text'
              onChange={handleChange}
              onBlur={handleBlur}
              value={formData.country}
              className={generalFieldClassName}
              required
            />
            <ErrorMessage error={errors.country} />
          </label>

          <label className='pb-2 block text-lg text-gray-600'>
            State Province
            <Input
              // TODO: get the state_province name from an api or list, make it a dropdown selection
              name='state_province'
              type='text'
              onChange={handleChange}
              onBlur={handleBlur}
              value={formData.state_province}
              className={generalFieldClassName}
              required
            />
            <ErrorMessage error={errors.state_province} />
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

          <label className='pb-2 block text-lg text-gray-600'>
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

          <label className='pb-2 block text-lg text-gray-600'>
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
            {/* <ErrorMessage error={errors.password} /> */}
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
    </div>
  );
};

export default StakeholderForm;
