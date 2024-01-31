// import { Navigation } from '../Navigation/Navigation';
// import { UserMenu } from '../UserMenu/UserMenu';
// import { AuthNav } from '../AuthNav/AuthNav';
import Logo from 'components/Logo';
import { Header} from './Appbar.styled';
import Navigation from 'components/Navigation';
// import Navigation from 'components/Navigation';
// import { Heading } from '@chakra-ui/react';
// import { FcMultipleSmartphones } from 'react-icons/fc';


export default function AppBar () {
  return (
    <Header>
    <Logo />
    <Navigation />
    </Header>
  );
};
