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

  if (context !== '' && context !== null) {
    createToast();
  }
  return;
};

export default useToast;
