import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import {
  LoginContainer,
  LoginForm,
  LoginHeading,
  LoginInput,
  LoginButton,
} from './styles';

const Login = () => {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        'https://647cc089c0bae2880ad1233e.mockapi.io/api/blog/users'
      );
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const user = users.find(
      (user) => user.login === email && user.password === password
    );
    if (user) {
      dispatch({ type: 'SET_AUTHORIZED', payload: true }); // Dispatch action to set authorized state in Redux
    } else {
      dispatch({ type: 'SET_AUTHORIZED', payload: false }); // Dispatch action to set authorized state in Redux
      alert('Invalid email or password');
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleLogin}>
        <LoginHeading>Login</LoginHeading>
        <LoginInput
          type="text"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <LoginInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <LoginButton type="submit">Login</LoginButton>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
