import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

// import { Wrapper } from './Layout.style';
import Loader from 'components/Loader';
import AppBar from 'components/AppBar';
import { Main } from './Layout.styled';
import Footer from 'components/Footer';

export default function Layout() {
  return (
    <>
        <AppBar />
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
       <Footer />
    </>
  );
}
