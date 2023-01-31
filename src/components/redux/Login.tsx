import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '@/store/userSlice';

const ReduxLogin = () => {
  const dispatch = useDispatch();

  return (
    <>
      <button
        onClick={() => {
          dispatch(login({ name: '붕붕붕', age: 28, email: 'email@gmail.com' }));
        }}>
        Login
      </button>
    </>
  );
};

export default ReduxLogin;
