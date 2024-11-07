import React from 'react';
import { HiPencil, HiTrash } from 'react-icons/hi2';
import Modal from './Modal';
import ConfirmDelete from './ConfirmDelete';

const TableRow = ({
  item,
  handleDelete,
  handleEdit,
  toRender,
  resourceName,
  headers,
}) => {
  return (
    <tr>
      {headers.slice(0, -1).map((header, index) => {
        // Skip the last column for buttons
        const cellKey = header.toLowerCase().replace(/\s+/g, '_'); // Assuming each header is unique
        return (
          <td key={index} className='py-2 px-4 border-b border-gray-200'>
            {item[cellKey] || 'N/A'}
          </td>
        );
      })}
      <td className='py-2 px-4 border-b border-gray-200'>
        <Modal>
          <Modal.Open opens='edit'>
            <button
              className='text-blue-500 hover:text-blue-700 mr-4 text-lg'
              onClick={() => handleEdit(item)}
            >
              <HiPencil />
            </button>
          </Modal.Open>
          <Modal.Window name='edit'>{toRender}</Modal.Window>

          <Modal.Open opens='delete'>
            <button
              className='text-red-500 hover:text-red-700 mr-4 text-lg'
              onClick={() => handleDelete(item)}
            >
              <HiTrash />
            </button>
          </Modal.Open>
          <Modal.Window name='delete'>
            {({ close }) => (
              <ConfirmDelete
                resourceName={resourceName}
                onConfirm={() => console.log('deleted: ')}
                onCloseModal={close}
              />
            )}
          </Modal.Window>
        </Modal>
      </td>
    </tr>
  );
};

export default TableRow;
