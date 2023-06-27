import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #333;
  color: #fff;
`;

export const LoginHeading = styled.h2`
  margin-bottom: 20px;
`;

export const LoginInput = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  background-color: #fff;
  border: none;
  color: #323232
`;

export const LoginButton = styled.button`
  background-color: #fff;
  color: #333;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
`;
