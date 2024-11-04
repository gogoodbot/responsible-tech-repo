import Modal from '../comps/Modal';
import { useState } from 'react';

function AddArtifact() {
  const [isModalOpen, setModalOpen] = useState(false); // Modal visibility state

  return (
    <>
      <button
        className='font-poppins font-bold text-1xl cursor-pointer px-3 py-2 my-3 rounded-sm overflow-hidden border bg-goodbot-primary-blue dark:bg-transparent shadow'
        onClick={() => setModalOpen((isModalOpen) => !isModalOpen)}
      >
        Create a new Litigation
      </button>
      {isModalOpen && (
        <Modal show={isModalOpen} onClose={() => setModalOpen(false)}>
          <h2>Create a New Litigation</h2>
          <p>
            Litigation ID:{' '}
            {/* You can display a unique ID or form fields here */}
          </p>
        </Modal>
      )}
    </>
  );
}

export default AddArtifact;
