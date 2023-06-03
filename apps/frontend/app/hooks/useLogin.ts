import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';

const LOGIN_IN = gql`
  mutation Login($loginInput: LoginInput!) {
    login(loginInput: $loginInput) {
      token
      role
      avatar
    }
  }
`;

const useLogin = () => {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const [login, { reset }] = useMutation(LOGIN_IN);

  const handleLogin = async () => {
    document.cookie = '';
    localStorage.clear();

    const loginPromise = login({
      variables: {
        loginInput: {
          account: account,
          password: password,
        },
      },
    }).then(
      (res: {
        data: { login: { token: string; role: string; avatar: string } };
      }) => {
        document.cookie = `token=${res.data.login.token}`;
        document.cookie = `role=${res.data.login.role}`;
        document.cookie = `avatar=${res.data.login.avatar}`;
        localStorage.setItem('token', res.data.login.token);
        localStorage.setItem('role', res.data.login.role);
        router.push('/');
      }
    );

    await toast
      .promise(
        loginPromise,
        {
          loading: 'Loading...',
          success: 'Login Success',
          error: (err) => err.message,
        },
        {
          className: 'font-bold text-lg',
        }
      )
      .catch((err) => reset());
  };

  return { account, setAccount, setPassword, handleLogin };
};

export default useLogin;
