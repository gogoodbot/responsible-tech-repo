import React from 'react';
import TableRow from './TableRow';

const Table = ({
  headers,
  data,
  handleEdit,
  handleDelete,
  toRender,
  resourceName,
}) => {
  return (
    <div className='overflow-auto max-h-[65vh]'>
      <table className='min-w-full bg-white border border-gray-200'>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} className='py-2 px-4 border-b border-gray-200'>
                {header}
              </th>
            ))}
            <th className='py-2 px-4 border-b border-gray-200'></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <TableRow
              key={index}
              item={item}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              toRender={toRender}
              resourceName={resourceName}
              headers={headers}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
