import { Button } from '@/components/ui/button';

function ConfirmDelete({ resourceName, onConfirm, onCloseModal }) {
  return (
    <div className='p-6 text-center space-y-6'>
      <p className='text-lg font-semibold text-gray-800 dark:text-gray-200'>
        Are you sure you want to delete this{' '}
        <span className='font-bold'>{resourceName}</span> permanently?
      </p>
      <p className='text-sm text-gray-600 dark:text-gray-400'>
        This action cannot be undone.
      </p>

      <div className='flex justify-center gap-4 mt-6'>
        <Button
          onClick={onCloseModal}
          variant='secondary'
          className='px-5 py-3 border rounded-md font-medium hover:bg-goodbot-primary-blue hover:border-goodbot-primary-blue hover:text-white dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-goodbot-primary-blue dark:hover:border-goodbot-primary-blue dark:hover:text-white transition-colors duration-150'
        >
          Cancel
        </Button>
        <Button
          onClick={onConfirm}
          variant='danger'
          className='px-5 py-3 rounded-md font-medium bg-red-600 text-white border border-red-600 hover:bg-red-700 hover:border-red-700  dark:text-gray-900 dark:border-red-500 dark:hover:bg-red-600 dark:hover:border-red-600 transition-colors duration-150'
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
