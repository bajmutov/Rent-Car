import toast from 'react-hot-toast';

export const toastSuccess = (text = '', model = '') =>
  toast.success(`${text} ${model}`, {
    duration: 2000,
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
      fontSize: '14px',
    },
  });

export const toastError = (text = '', model = '') =>
  toast.error(`${text} ${model}`, {
    duration: 2000,
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
      fontSize: '14px',
    },
  });
