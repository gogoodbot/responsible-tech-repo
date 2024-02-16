import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { insertPolicy } from '@/lib/actions';

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
    <form onSubmit={handleSubmit}>
      {Object.entries(initialPolicyState).map(([key, value]) => (
        <label key={key}>
          {key.replace('_', ' ')}:
          <input
            type="text"
            name={key}
            value={policyData[key]}
            onChange={handleChange}
          />
        </label>
      ))}
      <Button type="submit">Submit</Button>
    </form>
  );
}
