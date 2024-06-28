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

const regexPatterns = {
  name: /^[A-Za-z\s]{2,50}$/,
  website: /^(https?:\/\/[^\s/$.?#].[^\s]*)$/,
  summary: /^.{5,10000}$/,
  legal_status: /^[A-Za-z\s]{2,20}$/,
  affiliation: /^[A-Za-z\s]{3,50}$/,
  functional_role: /^[A-Za-z\s]{2,50}$/,
  sector_focus: /^[A-Za-z\s]{3,50}$/,
  scope: /^[A-Za-z\s]{3,50}$/,
  communities_of_focus: /^[A-Za-z\s]{3,50}$/,
  geographic_mandate: /^[A-Za-z\s]{2,20}$/,
  hq_province: /^[A-Za-z\s]{2,60}$/,
  hq_city: /^[A-Za-z\s]{2,60}$/,
  status: /^[A-Za-z\s]{2,20}$/,
  stage: /^[A-Za-z\s]{2,20}$/,
  composition: /^[A-Za-z\s]{2,20}$/,
  size: /^[A-Za-z\s]{3,20}$/,
  established_date: /^\d{4}-\d{2}-\d{2}$/,
  username: /^[A-Za-z0-9_]{3,20}$/,
};

const ErrorMessage = ({ error }) => {
  if (!error) return null;
  return <p className='text-red-500'>{error}</p>;
};

const OrganizationFrom = () => {
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
        <h1 className='text-3xl font-bold my-8'>Organization Form</h1>
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
            Legal Status
            <Input
              name='legal_status'
              type='text'
              onChange={handleChange}
              onBlur={handleBlur}
              value={formData.legal_status}
              className={generalFieldClassName}
              required
            />
            <ErrorMessage error={errors.legal_status} />
          </label>

          <label className='pb-2 block text-lg text-gray-600'>
            Affilication
            <Input
              name='affiliation'
              type='text'
              onChange={handleChange}
              onBlur={handleBlur}
              value={formData.affiliation}
              className={generalFieldClassName}
              required
            />
            <ErrorMessage error={errors.affiliation} />
          </label>

          <label className='pb-2 block text-lg text-gray-600'>
            Functional Role
            <Input
              name='functional_role'
              type='text'
              onChange={handleChange}
              onBlur={handleBlur}
              value={formData.functional_role}
              className={generalFieldClassName}
              required
            />
            <ErrorMessage error={errors.functional_role} />
          </label>

          <label className='pb-2 block text-lg text-gray-600'>
            Sector Focus
            <Input
              name='sector_focus'
              type='text'
              onChange={handleChange}
              onBlur={handleBlur}
              value={formData.sector_focus}
              className={generalFieldClassName}
              required
            />
            <ErrorMessage error={errors.sector_focus} />
          </label>

          <label className='pb-2 block text-lg text-gray-600'>
            Scope
            <Input
              name='scope'
              type='text'
              onChange={handleChange}
              onBlur={handleBlur}
              value={formData.scope}
              className={generalFieldClassName}
              required
            />
            <ErrorMessage error={errors.scope} />
          </label>

          <label className='pb-2 block text-lg text-gray-600'>
            Communities of Focus
            <Input
              name='communities_of_focus'
              type='text'
              onChange={handleChange}
              onBlur={handleBlur}
              value={formData.communities_of_focus}
              className={generalFieldClassName}
              required
            />
            <ErrorMessage error={errors.communities_of_focus} />
          </label>

          <label className='pb-2 block text-lg text-gray-600'>
            Geographic Mandate
            <Input
              name='geographic_mandate'
              type='text'
              onChange={handleChange}
              onBlur={handleBlur}
              value={formData.geographic_mandate}
              className={generalFieldClassName}
              required
            />
            <ErrorMessage error={errors.geographic_mandate} />
          </label>

          <label className='pb-2 block text-lg text-gray-600'>
            HQ Province
            <Input
              // TODO: get the state_province name from an api or list, make it a dropdown selection
              name='hq_province'
              type='text'
              onChange={handleChange}
              onBlur={handleBlur}
              value={formData.hq_province}
              className={generalFieldClassName}
              required
            />
            <ErrorMessage error={errors.hq_province} />
          </label>

          <label className='pb-2 block text-lg text-gray-600'>
            HQ City
            <Input
              // TODO: get the state_province name from an api or list, make it a dropdown selection
              name='hq_city'
              type='text'
              onChange={handleChange}
              onBlur={handleBlur}
              value={formData.hq_city}
              className={generalFieldClassName}
              required
            />
            <ErrorMessage error={errors.hq_city} />
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
            Stage
            <Input
              name='stage'
              type='text'
              onChange={handleChange}
              onBlur={handleBlur}
              value={formData.stage}
              className={generalFieldClassName}
              required
            />
            <ErrorMessage error={errors.stage} />
          </label>

          <label className='pb-2 block text-lg text-gray-600'>
            Composition
            <Input
              name='composition'
              type='text'
              onChange={handleChange}
              onBlur={handleBlur}
              value={formData.composition}
              className={generalFieldClassName}
              required
            />
            <ErrorMessage error={errors.composition} />
          </label>

          <label className='pb-2 block text-lg text-gray-600'>
            Size
            <Input
              name='size'
              type='text'
              onChange={handleChange}
              onBlur={handleBlur}
              value={formData.size}
              className={generalFieldClassName}
              required
            />
            <ErrorMessage error={errors.size} />
          </label>

          <label className='pb-2 block text-lg text-gray-600'>
            Establishe Date
            <Input
              name='established_date'
              type='date'
              placeholder='YYYY-MM-DD'
              onChange={handleChange}
              onBlur={handleBlur}
              value={formData.established_date}
              className={generalFieldClassName}
              required
            />
            <ErrorMessage error={errors.established_date} />
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

export default OrganizationFrom;
