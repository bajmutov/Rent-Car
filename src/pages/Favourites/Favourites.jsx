import { useSelector } from 'react-redux';
import { selectFavoriteCars } from '../../redux/cars/carsSelectors';
import CarsList from 'components/CarsList';
import { Container, Info } from './Favourites.styled';

const Favourites = () => {
  const favouriteCars = useSelector(selectFavoriteCars);

  const isShowFavoriteList = favouriteCars.length > 0;

  return (
    <section>
      <Container>
        {!isShowFavoriteList && (
          <Info>
            There are no favourite cars yet. Choose your cars in catalog
            please...
          </Info>
        )}

        {isShowFavoriteList && <CarsList cars={favouriteCars} />}
      </Container>
    </section>
  );
};

export default Favourites;
