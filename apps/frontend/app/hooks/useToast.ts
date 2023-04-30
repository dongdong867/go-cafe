import { useEffect, useReducer } from 'react';
import toast from 'react-hot-toast';

const useToast = (context: string, type?: string) => {
  const createToast = () => {
    switch (type) {
      case 'success':
        return toast.success(context, { className: 'font-bold text-lg' });
      case 'error':
        return toast.error(context, { className: 'font-bold text-lg' });
      case 'loading':
        return toast.loading(context, { className: 'font-bold text-lg' });
      default:
        return toast(context, { className: 'font-bold, text-lg' });
    }
  };

  useEffect(() => {
    if (context !== '' && context !== null) {
      createToast();
    }
  }, [context]);
  return;
};

export default useToast;
