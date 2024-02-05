import Container from 'components/Container';
import {
  StyledFooter,
  StyledFooterContainer,
  StyledFooterMediaContainer,
  StyledFooterMetaContainer,
  StyledFooterMetaLink,
  Twitter,
} from './Footer.styled';
import Logo from 'components/Logo';
import Icon from 'components/Icon';

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <StyledFooterContainer>
          <Logo />

          <StyledFooterMetaContainer>
            <StyledFooterMetaLink
              href="https://github.com/bajmutov/Rent-Car/"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              Privacy Policy
            </StyledFooterMetaLink>
          </StyledFooterMetaContainer>

          <StyledFooterMediaContainer>
            <li>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                <Twitter />
              </a>
            </li>
            <li>
              <a
                href="https://web.telegram.org/"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name={'telegram'} size={48} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name={'insta'} />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name={'facebook'} size={38} />
              </a>
            </li>
          </StyledFooterMediaContainer>
        </StyledFooterContainer>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
