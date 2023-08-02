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
  border-radius: 33px;
  background: linear-gradient(145deg, #0e0f17, #10121c);
  box-shadow:  17px 17px 48px #090b10, -17px -17px 48px #151724;
`;

export const LoginHeading = styled.h2`
  margin-bottom: 20px;
`;

export const LoginInput = styled.input`
  margin-bottom: 20px;
  padding: 16px;
  color: #323232
  border-radius: 33px;
background: #0F111A;
box-shadow: inset 23px 23px 46px #090b10,
            inset -23px -23px 46px #151724;

`;

export const LoginButton = styled.button`
  background-color: #fff;
  color: #333;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 33px;
  background: linear-gradient(145deg, #0e0f17, #10121c);
  box-shadow:  17px 17px 48px #090b10, -17px -17px 48px #151724;
`;
