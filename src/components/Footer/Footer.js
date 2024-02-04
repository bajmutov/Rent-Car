import Container from 'components/Container';
import {
  StyledFooter,
  StyledFooterContainer,
  StyledFooterMetaContainer,
  StyledFooterMetaLink,
} from './Footer.styled';
import Logo from 'components/Logo';

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <StyledFooterContainer>
          <Logo />

          <StyledFooterMetaContainer>
            <StyledFooterMetaLink
              href="https://github.com/Ivan011001/car-rental"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              Privacy Policy
            </StyledFooterMetaLink>
          </StyledFooterMetaContainer>
        </StyledFooterContainer>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
