import React from 'react';

import Layout from '../../components/Layout';

import { LoginContainer, LoginForm, LoginHeading, LoginInput, LoginButton } from '../../styles/login';


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
