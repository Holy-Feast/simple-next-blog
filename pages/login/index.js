import React from 'react';
import styled from 'styled-components';

import Layout from '../../components/Layout';

import { LoginContainer, LoginForm, LoginHeading, LoginInput, LoginButton } from './styles';


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
