import { Link } from './Navigation.styled';

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/catalog">Catalog</Link>
      <Link to="/favourites">Favourite</Link>
    </nav>
  );
};

export default Navigation;
