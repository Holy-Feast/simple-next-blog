import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { fetchUsers } from '../../../state/actions/actions';
import { useForm, Controller } from 'react-hook-form';
import {
  LoginContainer,
  LoginForm,
  LoginHeading,
  LoginInput,
  LoginButton,
} from './styled';

const Login = () => {
  const users = useSelector((state) => state.users);
  const [loginError, setLoginError] = useState(false); // State variable for login error
  const dispatch = useDispatch();
  const router = useRouter();
  const { control, handleSubmit, formState: { errors } } = useForm();

  // Validation rules for email and password
  const emailValidation = {
    required: 'Email is required',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: 'Invalid email address',
    },
  };

  const passwordValidation = {
    required: 'Password is required',
    minLength: {
      value: 6,
      message: 'Password must be at least 6 characters long',
    },
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);


  const handleLogin = (data) => {
    const { email, password } = data; // Destructure email and password from form data
    const user = users.find(
      (user) => user.login === email && user.password === password
    );
    if (user) {
      dispatch({ type: 'SET_AUTHORIZED', payload: true });
      router.push('/blog/');
    } else {
      setLoginError(true); // Set login error to true if no matching user is found
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit(handleLogin)}>
        <LoginHeading>Login</LoginHeading>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={emailValidation}
          render={({ field }) => (
            <>
              <LoginInput
                type="text"
                placeholder="Email"
                {...field}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </>
          )}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={passwordValidation}
          render={({ field }) => (
            <>
              <LoginInput
                type="password"
                placeholder="Password"
                {...field}
              />
              {errors.password && <p>{errors.password.message}</p>}
            </>
          )}
        />
        <LoginButton type="submit">Login</LoginButton>
        {loginError && <p style={{ color: 'red' }}>Invalid email or password</p>} {/* Display the login error message */}
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
