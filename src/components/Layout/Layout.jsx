import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader';
import AppBar from 'components/AppBar';
import { MainContainer, Main } from './Layout.styled';
import Footer from 'components/Footer';
import Container from 'components/Container';

export default function Layout() {
  return (
    <MainContainer>
      <AppBar />
      <Main>
        <Container>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </Main>
      <Footer />
    </MainContainer>
  );
}
