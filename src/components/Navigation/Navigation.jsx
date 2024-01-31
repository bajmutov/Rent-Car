import { Link } from './Navigation.styled';
// import { Box } from '@chakra-ui/react';

const Navigation = () => {
  return (
    // <Box ml={6}>
    //   <nav>
    //     <Link to="/">Home</Link>
    //     {isLoggedIn && <Link to="contacts">Contacts</Link>}
    //   </nav>
    // </Box>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/catalog">Catalog</Link>
        <Link to="/favourites">Favourite</Link>
      </nav>
  );
};

export default Navigation;