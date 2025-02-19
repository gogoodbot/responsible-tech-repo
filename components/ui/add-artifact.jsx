import { Button } from '@/components/ui/button';
import Modal from '@/app/comps/Modal';

function AddArtifact({ toRender, activeSection }) {
  return (
    <Modal>
      <Modal.Open opens='add-artifact'>
        <Button className='font-poppins font-bold text-1xl cursor-pointer px-3 py-2 my-3 rounded-sm overflow-hidden border bg-goodbot-primary-blue dark:bg-transparent shadow'>
          Add a new {activeSection}
        </Button>
      </Modal.Open>
      <Modal.Window name='add-artifact'>{toRender}</Modal.Window>
    </Modal>
  );
}

export default AddArtifact;
