import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { supabase } from "@/lib/client";


export default function PolicyForm() {

  const [name, setName] = useState('');
  const [summary, setSummary] = useState('');
  const [country, setCountry] = useState('');
  const [type, setType] = useState('');
  const [link, setLink] = useState('');
  const [status, setStatus] = useState('');
  const [mandate, setMandate] = useState('');
  const [jurisdiction, setJurisdiction] = useState('');
  const [entity, setEntity] = useState('');
  const [sub_entity, setSubEntity] = useState('');
  const [start_date, setStartDate] = useState('');
  const [notes, setNotes] = useState('');
  const [created_by, setCreatedBy] = useState('');
  const [created_on, setCreatedOn] = useState('');
  const [modified_by, setModifiedBy] = useState('');
  const [modified_on, setModifiedOn] = useState('');

  async function insertPolicy(
    name,
    summary,
    country,
    type,
    link,
    status,
    mandate,
    jurisdiction,
    entity,
    sub_entity,
    start_date,
    notes,
    created_by,
    created_on,
    modified_by,
    modified_on,
    ) {
    try {
      const { data, error } = await supabase.from('Policy').insert({ name, summary,
          country,
          type,
          link,
          status,
          mandate,
          jurisdiction,
          entity,
          sub_entity,
          start_date,
          notes,
          created_by,
          created_on,
          modified_by,
          modified_on });
  
      if (error) {
        throw error;
      }
  
      return data; // Return the inserted data if successful
    } catch (error) {
      console.error('Error inserting data:', error.message || error);
      throw error; // Rethrow the error for the calling component to handle
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await insertPolicy(name, summary, country, type, link, status, mandate, jurisdiction, entity, sub_entity, start_date, notes, created_by, created_on, modified_by, modified_on);
      // Clear the form fields after successful submission if needed
      setName('');
      setSummary('');
      setCountry('');
      setType('');
      setLink('');
      setStatus('');
      setMandate('');
      setJurisdiction('');
      setEntity('');
      setSubEntity('');
      setStartDate('');
      setNotes('');
      setCreatedBy('');
      setCreatedOn('');
      setModifiedBy('');
      setModifiedOn('');
    
      // Clear other fields similarly
    } catch (error) {
      console.error('Error submitting form:', error.message || error);
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Summary:
            <input type="text" value={summary} onChange={(e) => setSummary(e.target.value)} />
          </label>
          <label>
            Country:
            <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
          </label>
          <label>
            Type:
            <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
          </label>
          <label>
            Link:
            <input type="text" value={link} onChange={(e) => setLink(e.target.value)} />
          </label>
          <label>
            Status:
            <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} />
          </label>
          <label>
            Mandate:
            <input type="text" value={mandate} onChange={(e) => setMandate(e.target.value)} />
          </label>
          <label>
            Jurisdiction:
            <input type="text" value={jurisdiction} onChange={(e) => setJurisdiction(e.target.value)} />
          </label>
          <label>
            Entity:
            <input type="text" value={entity} onChange={(e) => setEntity(e.target.value)} />
          </label>
          <label>
            Sub Entity:
            <input type="text" value={sub_entity} onChange={(e) => setSubEntity(e.target.value)} />
          </label>
          <label>
            Start Date:
            <input type="text" value={start_date} onChange={(e) => setStartDate(e.target.value)} />
          </label>
          <label>
            Notes:
            <input type="text" value={notes} onChange={(e) => setNotes(e.target.value)} />
          </label>
          <label>
            Created By:
            <input type="text" value={created_by} onChange={(e) => setCreatedBy(e.target.value)} />
          </label>
          <label>
            Created On:
            <input type="text" value={created_on} onChange={(e) => setCreatedOn(e.target.value)} />
          </label>
          <label>
            Modified By:
            <input type="text" value={modified_by} onChange={(e) => setModifiedBy(e.target.value)} />
          </label>
          <label>
            Modified On:
            <input type="text" value={modified_on} onChange={(e) => setModifiedOn(e.target.value)} />
          </label>

      <Button type="submit">Submit</Button>
    </form>
  );
}
