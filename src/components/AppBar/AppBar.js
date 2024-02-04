import Logo from 'components/Logo';
import { Header, StyledHeaderContainer } from './Appbar.styled';
import Navigation from 'components/Navigation';
import Container from 'components/Container';

export default function AppBar() {
  return (
    <Header>
      <Container>
        <StyledHeaderContainer>
          <Logo />
          <Navigation />
        </StyledHeaderContainer>
      </Container>
    </Header>
  );
}
