import { gql, useMutation } from '@apollo/client';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';
import useToast from './useToast';

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
      redirect('/');
    }
  }, [data]);

  if (error) {
    useToast(error.message, 'error');
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
