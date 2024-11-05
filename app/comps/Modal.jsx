// components/Modal.js
import { Button } from '@/components/ui/button';
import React, {
  cloneElement,
  createContext,
  useContext,
  useState,
} from 'react';
import { createPortal } from 'react-dom';

const StyledModal = ({ children, onClose }) => {
  return (
    <div
      className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'
      onClick={onClose} // Close modal on clicking outside content
    >
      <div
        className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg relative min-w-[70vw] max-h-[80vh] overflow-y-auto w-full max-w-lg'
        onClick={(e) => e.stopPropagation()} // Prevent closing on clicking inside content
      >
        {children}
      </div>
    </div>
  );
};

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState('');

  const close = () => setOpenName('');
  const open = (name) => setOpenName(name);

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ opens: opensWindowName, children }) {
  const { open } = useContext(ModalContext);

  //  cloning the children with the open onClick prop
  return cloneElement(children, {
    onClick: () => open(opensWindowName),
  });
}

function Window({ name, children }) {
  const { openName, close } = useContext(ModalContext);
  if (name !== openName) return null;

  //  using portal to ensure reusability of the modal and avoiding potential parent overflow hidden elsewhere
  return createPortal(
    <StyledModal onClose={close}>
      <Button
        className='absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-xl'
        onClick={close}
      >
        &times;
      </Button>
      {typeof children === 'function' ? children({ close }) : children}
      {/* {children} */}
      {/* <div>{cloneElement(children, { onCloseModal: close })}</div> */}
    </StyledModal>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
