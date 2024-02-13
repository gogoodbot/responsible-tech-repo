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
  "name": z.string().min(1).max(40),
  "summary": z.string().min(1).max(255),
  "country": z.string().min(1).max(255),
  "type": z.string().min(1).max(255),
  "link": z.string().url(),
  "status": z.string().min(1).max(255),
  "mandate": z.string().min(1).max(255),
  "jurisdiction": z.string().min(1).max(255),
  "entity": z.string().min(1).max(255),
  "sub_entity": z.string().min(1).max(255),
  "start_date": z.string().min(1).max(255),
  "notes": z.string().min(1).max(255),
  "created_by": z.string().min(1).max(255),
  "created_on": z.string().min(1).max(255),
  "modified_by": z.string().min(1).max(255),
  "modified_on": z.string().min(1).max(255),
  "tags": z.string().min(1).max(255),
});
export default function PolicyForm() {
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