'use client';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import axios from 'axios';

// Create an Axios instance with the base URL
const api = axios.create({
  baseURL: 'https://goodbot-api.vercel.app',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin': '*', // Try adding this, although it's better handled server-side
  },
});

const Login = () => {
  const formMethods = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const router = useRouter();

  // const onSubmit = (data) => {
  //   console.log('Login data: ', data);
  //   formMethods.reset(); // Reset form fields
  // };

  const onSubmit = async (data) => {
    try {
      const params = new URLSearchParams();
      params.append('username', data.username);
      params.append('password', data.password);

      // const response = await api.post('/v1/login', params);
      const response = await api.post('/api/v1/login', params); // Use the relative path

      const { access_token } = response.data;

      console.log('Login successful: ', access_token);
      // router.push('/dashboard');
    } catch (error) {
      console.error('Login failed: ', error.response?.data || error.message);
    }
  };

  const onCancel = () => {
    console.log('Login cancelled');
    formMethods.reset(); // Reset form fields
    router.back();
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white shadow-md rounded-lg p-8 w-full max-w-sm'>
        <h2 className='text-2xl font-bold text-center text-gray-800 mb-6'>
          {' '}
          Login
        </h2>

        <Form {...formMethods}>
          <form
            onSubmit={formMethods.handleSubmit(onSubmit)}
            className='space-y-4'
          >
            {/* Email field: */}
            <FormField
              name='username'
              rules={{ required: 'Username is required' }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <input
                      type='text'
                      {...field}
                      placeholder='Enter your username'
                      className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password field: */}
            <FormField
              name='password'
              rules={{ required: 'Password is required' }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <input
                      type='password'
                      {...field}
                      placeholder='Enter your password'
                      className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Buttons */}
            <div className='flex justify-between'>
              <button
                type='button'
                onClick={onCancel}
                className='w-full px-4 py-2 text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300'
              >
                Cancel
              </button>
              <button
                type='submit'
                className='w-full ml-4 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600'
              >
                Login
              </button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Login;
