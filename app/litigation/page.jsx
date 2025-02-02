'use client';

import React, { useState, useEffect } from 'react';
// import litigationData from '../../api-forms/litigationData.json';
import Table from '@/app/comps/Table';

export default function Litigation({ toRender, resourceName }) {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   // Simulate fetching data by setting mock data to state
  //   setData(litigationData);
  // }, []);

  const headers = [
    'Country',
    'Status',
    'Name',
    'Start Date',
    'Link',
    'Summary',
    'Jurisdiction',
    'Mandate',
    'Actions',
  ];

  // Handler functions for Edit and Delete buttons
  const handleEdit = (item) => {
    console.log('Edit:', item);
    // Add logic to handle edit, such as opening a modal or redirecting to an edit page
  };

  const handleDelete = (item) => {
    console.log('Delete:', item);
    // Add logic to handle deletion, such as updating state or making a DELETE request
    // setData(data.filter((litigation) => litigation.name !== item.name)); // Example delete logic
  };

  return (
    <div className='container mx-auto my-4'>
      <h2 className='text-2xl font-bold mb-4'>Litigation Records</h2>
      <Table
        headers={headers}
        data={data}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        toRender={toRender}
        resourceName={resourceName}
      />
    </div>
  );
}
