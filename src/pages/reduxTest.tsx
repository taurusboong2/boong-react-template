import React from 'react';
import { Button, Card, PageHeader } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import ReduxProfile from '@/components/redux/Profile';
import ReduxLogin from '@/components/redux/Login';
import { plus, minus } from '@/store/countSlice';

const ReduxTest = () => {
  const count = useSelector<{ counter: { value: number } }>(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <PageHeader title="redux test" subTitle="redux test page" />
      <Card
        title="counter"
        style={{ width: 300, textAlign: 'center', marginBottom: 30 }}
        headStyle={{ fontWeight: 'bold', textAlign: 'center' }}>
        <div>
          <Button onClick={() => dispatch(minus())}>-</Button>
          Value: {count}
          <Button onClick={() => dispatch(plus())}>+</Button>
        </div>
      </Card>
      <Card
        title="user"
        style={{ width: 300, textAlign: 'center', marginBottom: 30 }}
        headStyle={{ fontWeight: 'bold', textAlign: 'center' }}>
        <ReduxProfile />
        <ReduxLogin />
      </Card>
      <Card title="Thunk" style={{ width: 300, textAlign: 'center', marginBottom: 30 }}>
        thunk
      </Card>
    </>
  );
};

export default ReduxTest;
