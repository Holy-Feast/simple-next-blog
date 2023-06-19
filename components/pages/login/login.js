import React from 'react';
import {
    LoginContainer,
    LoginForm,
    LoginHeading,
    LoginInput,
    LoginButton,
  } from '../../styles/login';
  
  const Login = () => {
    return (
        <LoginContainer>
          <LoginForm>
            <LoginHeading>Login</LoginHeading>
            <LoginInput type="email" placeholder="Email" />
            <LoginInput type="password" placeholder="Password" />
            <LoginButton>Login</LoginButton>
          </LoginForm>
        </LoginContainer>
    );
  };
  
  export default Login;
  