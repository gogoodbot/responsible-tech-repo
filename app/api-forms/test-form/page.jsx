'use client';

import { Button } from '@/components/ui/button';

import { REGEX_PATTERNS } from '../api-data';
import useForm from '../useForm';
import SelectCountry from '@/components/select-location/select-country';
import SelectProvince from '@/components/select-location/province';
import { submitToLitigation } from '../submit-handler';

const initialState = {
  country: '',
};

const TestForm = () => {
  const { handleSubmit, resetForm, generalButtonClassName } = useForm(
    initialState,
    REGEX_PATTERNS,
    submitToLitigation
  );

  return (
    <div className='flex items-center justify-center min-h-screen p-4'>
      <div className='w-full max-w-7xl bg-white p-8 rounded-md shadow-md'>
        <h1 className='text-3xl font-bold my-8'>Litigation Form</h1>
        <form
          onSubmit={handleSubmit}
          className='w-full max-w-7xl bg-white p-8 rounded-md space-y-4'
        >
          <SelectCountry onCountrySelect={} />
          <SelectProvince />

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

export default TestForm;
