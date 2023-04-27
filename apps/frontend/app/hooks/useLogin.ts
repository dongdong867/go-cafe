import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const useLogin = () => {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState(null);

  const route = useRouter();

  useEffect(() => {
    if (error !== null) {
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  }, [error]);

  const login = () => {
    if (account === 'account' && password === 'password') {
      console.log('login success');
      route.push('/');
      return;
    }

    setError('login failed');
  };

  return { setAccount, setPassword, error, login };
};

export default useLogin;
