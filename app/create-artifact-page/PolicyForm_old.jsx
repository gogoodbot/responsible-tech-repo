import { useState } from 'react';
import { useEffect } from 'react';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from "zod";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { insertPolicy } from '@/lib/actions';



const formSchema = z.object({
  name: z.string().min(2).max(50),
  summary: z.string().min(10).max(200),
  country: z.string().min(2).max(50),
  type: z.string().min(2).max(50),
  link: z.string().url(),
  status: z.string().min(2).max(20),
  mandate: z.string().min(2).max(50),
  jurisdiction: z.string().min(2).max(50),
  entity: z.string().min(2).max(50),
  sub_entity: z.string().min(2).max(50),
  start_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/), // Assuming YYYY-MM-DD format
  notes: z.string().max(500),
  created_by: z.string().min(2).max(50),
  created_on: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  modified_by: z.string().min(2).max(50),
  modified_on: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
});
export default function PolicyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
  });

  const [formData, setFormData] = useState({
    name: '',
    summary: '',
    country: '',
    type: '',
    link: '',
    status: '',
    mandate: '',
    jurisdiction: '',
    entity: '',
    sub_entity: '',
    start_date: '',
    notes: '',
    created_by: '',
    created_on: '',
    modified_by: '',
    modified_on: '',
    tags: '',
  });

  // Function to handle changes in form inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Form data:', formData);
      const insertedData = await insertPolicy(formData);
      console.log('Data inserted successfully:', insertedData);
      // Clear form fields after successful submission
      setFormData({ /* Reset form data */ });
    } catch (error) {
      console.error('Error inserting data:', JSON.stringify(error.message || error));
    }
  };
  
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });
  console.log('formData:', formData);



  useEffect(() => {
    // Call the insertPolicy function when the component mounts
    async function fetchData() {
      try {
        const insertedData = await insertPolicy('Lev Policy',
        'This is a test policy summary',
        'Test Country',
        'Test Type',
        'https://testlink.com',
        'Active',
        'Test Mandate',
        'Test Jurisdiction',
        'Test Entity',
        'Test Sub Entity',
        '2022-01-01',
        'Test Notes',
        'admin',
        'admin');
        console.log('Data inserted successfully:', insertedData);
      } catch (error) {
        console.error('FROM MOCK FUNCTION Error inserting data:',  JSON.stringify(error.message || error));
      }
    }

    fetchData();
  }, []);



  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(formData).map((key) => (
        <input
          key={key}
          type="text"
          name={key}
          value={formData[key]}
          placeholder={key.charAt(0).toUpperCase() + key.slice(1).replace('_', ' ')}
          onChange={handleInputChange}
        />
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}