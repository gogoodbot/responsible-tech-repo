import { Button } from '@/components/ui/button';
import Modal from '../comps/Modal';

function AddArtifact({ toRender }) {
  return (
    <Modal>
      <Modal.Open opens='add-artifact'>
        <Button className='font-poppins font-bold text-1xl cursor-pointer px-3 py-2 my-3 rounded-sm overflow-hidden border bg-goodbot-primary-blue dark:bg-transparent shadow'>
          Create a new Litigation btn
        </Button>
      </Modal.Open>
      <Modal.Window name='add-artifact'>
        <h2>Create a New Litigation</h2>
        {toRender}
      </Modal.Window>
    </Modal>
  );
}

// function AddArtifact({ toRender }) {
//   const [isModalOpen, setModalOpen] = useState(false); // Modal visibility state

//   return (
//     <>
//       <button
//         className='font-poppins font-bold text-1xl cursor-pointer px-3 py-2 my-3 rounded-sm overflow-hidden border bg-goodbot-primary-blue dark:bg-transparent shadow'
//         onClick={() => setModalOpen((isModalOpen) => !isModalOpen)}
//       >
//         Create a new Litigation
//       </button>
//       {isModalOpen && (
//         <Modal show={isModalOpen} onClose={() => setModalOpen(false)}>
//           <h2>Create a New Litigation</h2>
//           {toRender}
//         </Modal>
//       )}
//     </>
//   );
// }

export default AddArtifact;
