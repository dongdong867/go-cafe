import { useState } from 'react';

const useRegister = () => {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const register = () => {
    const user = {
      account: account,
      password: password,
      name: name,
      email: email,
      phone: phone,
    };
    console.log(user);
  };

  return { setAccount, setPassword, setName, setEmail, setPhone, register };
};

export default useRegister;
