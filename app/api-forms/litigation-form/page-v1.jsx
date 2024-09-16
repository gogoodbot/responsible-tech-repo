'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Tags, REGEX_PATTERNS } from '../api-data';
import useForm from '../useForm';
import SelectCountry from '@/components/select-location/select-country';
import { submitToLitigation } from '../submit-handler';
import { useEffect, useMemo } from 'react';
import { requestToBodyStream } from 'next/dist/server/body-streams';

const initialState = {
  name: '',
  link: '',
  summary: '',
  country: '',
  status: '',
  mandate: '',
  start_date: '', // startDate: '' >> TODO: fix it in database
  jurisdiction: '',
  tags: [],
  username: '',
  password: '',
};

const ErrorMessage = ({ error }) => {
  if (!error) return null;
  return <p className='text-red-500'>{error}</p>;
};

const LitigationForm = () => {
  const {
    formData,
    errors,
    handleChange,
    handleNameChange,
    handleCountryChange,
    handleProvinceChange,
    handleCityChange,
    handleBlur,
    handleSubmit,
    handleTags,
    resetForm,
    isClearLocations,
    generalFieldClassName,
    generalButtonClassName,
  } = useForm(initialState, REGEX_PATTERNS, submitToLitigation);

  return (
    <div className='flex items-center justify-center min-h-screen p-4'>
      <div className='w-full max-w-7xl bg-white p-8 rounded-md shadow-md'>
        <h1 className='text-3xl font-bold my-8'>Litigation Form</h1>
        <form
          onSubmit={handleSubmit}
          className='w-full max-w-7xl bg-white p-8 rounded-md space-y-4'
        >
          <SelectCountry />

          {/* <label className='pb-2 block text-lg text-gray-600'>
            Name
            <Input
              name='name'
              type='text'
              onChange={handleNameChange}
              onBlur={handleBlur}
              value={formData.name}
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
                required
              />
            </div>
            <ErrorMessage error={errors.summary} />
          </label> */}

          {/* <LocationSelect
            onCountryChange={handleCountryChange}
            fields={['country']}
            isClear={isClearLocations}
            // countryRequired={require}
          />
          <LocationSelect
            onStateChange={handleProvinceChange}
            fields={['state']}
            isClear={isClearLocations}
            ostan={true}
            // countryId={countryId}
            // countryRequired={require}
          />
          <LocationSelect
            onCityChange={handleCityChange}
            fields={['city']}
            isClear={isClearLocations}
            // countryRequired={require}
          /> */}

          {/* <label className='pb-2 block text-lg text-gray-600'>
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
              required
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
          </label> */}

          {/* <div className='form-group space-y-2'>
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
          </label> */}

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

export default LitigationForm;
