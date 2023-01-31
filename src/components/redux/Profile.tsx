import React from 'react';
import { useSelector } from 'react-redux';
import { userInitialState } from '@/store/userSlice';

const ReduxProfile = () => {
  const user: any = useSelector<{ user: userInitialState }>(state => state.user.value);

  return (
    <>
      <p> Name : {user.name} </p>
      <p> Age :{user.age} </p>
      <p> Email : {user.email}</p>
    </>
  );
};

export default ReduxProfile;
