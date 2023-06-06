import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #333;
  color: #fff;
`;

const LoginHeading = styled.h2`
  margin-bottom: 20px;
`;

const LoginInput = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  background-color: #fff;
  border: none;
`;

const LoginButton = styled.button`
  background-color: #fff;
  color: #333;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Layout>
      <LoginContainer>
        <LoginForm>
          <LoginHeading>Login</LoginHeading>
          <LoginInput type="email" placeholder="Email" />
          <LoginInput type="password" placeholder="Password" />
          <LoginButton>Login</LoginButton>
        </LoginForm>
      </LoginContainer>
    </Layout>
  );
};

export default Login;
