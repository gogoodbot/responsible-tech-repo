'use client';

import React, { useState, useEffect } from 'react';
import litigationData from '../../api-forms/litigationData.json';
import Modal from '@/app/comps/Modal';
import AddArtifact from '../AddArtifact';

export default function Litigation({ toRender, toConfirm }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulate fetching data by setting mock data to state
    setData(litigationData);
  }, []);

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
      <table className='min-w-full bg-white border border-gray-200'>
        <thead>
          <tr>
            <th className='py-2 px-4 border-b border-gray-200'>Country</th>
            <th className='py-2 px-4 border-b border-gray-200'>Status</th>
            <th className='py-2 px-4 border-b border-gray-200'>Name</th>
            <th className='py-2 px-4 border-b border-gray-200'>Start Date</th>
            <th className='py-2 px-4 border-b border-gray-200'>Link</th>
            <th className='py-2 px-4 border-b border-gray-200'>Summary</th>
            <th className='py-2 px-4 border-b border-gray-200'>Jurisdiction</th>
            <th className='py-2 px-4 border-b border-gray-200'>Mandate</th>
            <th className='py-2 px-4 border-b border-gray-200'></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className='py-2 px-4 border-b border-gray-200'>
                {item.country}
              </td>
              <td className='py-2 px-4 border-b border-gray-200'>
                {item.status}
              </td>
              <td className='py-2 px-4 border-b border-gray-200'>
                {item.name}
              </td>
              <td className='py-2 px-4 border-b border-gray-200'>
                {item.start_date || 'N/A'}
              </td>
              <td className='py-2 px-4 border-b border-gray-200'>
                {item.link ? (
                  <a href={item.link} target='_blank' rel='noopener noreferrer'>
                    View
                  </a>
                ) : (
                  'N/A'
                )}
              </td>
              <td className='py-2 px-4 border-b border-gray-200'>
                {item.summary || 'N/A'}
              </td>
              <td className='py-2 px-4 border-b border-gray-200'>
                {item.jurisdiction || 'N/A'}
              </td>
              <td className='py-2 px-4 border-b border-gray-200'>
                {item.mandate || 'N/A'}
              </td>
              <td className='py-2 px-4 border-b border-gray-200'>
                {' '}
                {/* Flex container for buttons */}
                <Modal>
                  <Modal.Open opens='edit'>
                    <button className='text-blue-500 hover:underline'>
                      Edit
                    </button>
                  </Modal.Open>
                  <Modal.Window name='edit'>{toRender}</Modal.Window>

                  <Modal.Open opens='delete'>
                    <button className='text-blue-500 hover:underline'>
                      Delete
                    </button>
                  </Modal.Open>
                  <Modal.Window name='delete'>{toConfirm}</Modal.Window>
                </Modal>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
//   return <div>Litigation Content</div>;
// }
