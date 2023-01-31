import React, { FC, Suspense } from 'react';
import { hot } from 'react-hot-loader/root';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import GlobalStyle from '@/styles/globalStyles';
import HeaderMenu from '@/components/molecules/HeaderMenu';
import Home from '@/pages/home';
import ReduxTest from '@/pages/reduxTest';
import Reservations from '@/pages/reservations';
import NotFound from '@/pages/notFound';

const App: FC = () => {
  return (
    <>
      <>
        <BrowserRouter>
          <GlobalStyle />

          <HeaderMenu />

          <Suspense fallback={<></>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/reduxtest" element={<ReduxTest />} />
              <Route path="/reduxtest" element={<ReduxTest />} />
              <Route path="/reserv" element={<Reservations />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </>
    </>
  );
};

export default hot(App);
