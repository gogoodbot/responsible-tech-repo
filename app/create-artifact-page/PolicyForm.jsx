import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { insertPolicy } from '@/lib/actions';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const initialPolicyState = {
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
};

export default function PolicyForm() {

  const [policyData, setPolicyData] = useState(initialPolicyState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPolicyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await insertPolicy(policyData);
      resetFormFields();
    } catch (error) {
      console.error('Error submitting form:', error.message || error);
      // Handle error
    }
  };

  const resetFormFields = () => {
    setPolicyData(initialPolicyState);
  };
  return (
    <Form onSubmit={handleSubmit} className="max-w-sm mx-auto">
      <div className="space-y-4">
        {Object.entries(initialPolicyState).map(([key, value]) => (
          <div key={key}>
            <label htmlFor={key} className="block font-medium">{key.replace('_', ' ')}</label>
            <input
              type="text"
              id={key}
              name={key}
              value={policyData[key]}
              onChange={handleChange}
              placeholder={key}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
        ))}
        <Button type="submit" >Submit</Button>
      </div>
    </Form>
  );
}
