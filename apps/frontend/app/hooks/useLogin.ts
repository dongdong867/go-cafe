import { gql, useMutation } from '@apollo/client';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const LOGIN_IN = gql`
  mutation Login($loginInput: LoginInput!) {
    login(loginInput: $loginInput)
  }
`;

const useLogin = () => {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');

  const [login, { data, error, loading, reset }] = useMutation(LOGIN_IN);

  useEffect(() => {
    if (data) {
      document.cookie = `token=${data.login}`;
      localStorage.setItem('token', data.login);
      redirect('/');
    }
  }, [data]);

  if (error) {
    toast.error(error.message, { className: 'font-bold text-lg' });
    reset();
  }

  const handleLogin = async () => {
    await login({
      variables: {
        loginInput: {
          account: account,
          password: password,
        },
      },
    });
  };

  return { setAccount, setPassword, handleLogin, error, loading };
};

export default useLogin;
