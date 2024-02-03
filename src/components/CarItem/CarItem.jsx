import {
  Wrapper,
  ImageWrap,
  Image,
  TitleWrap,
  Title,
  Span,
  Text,
  List,
  Item,
  HeartButton,
} from './CarItem.styled';
import { useState } from 'react';
import Button from 'components/Button';
import Modal from 'components/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavoriteCars } from '../../redux/cars/carsSelectors';
import {
  addFavouriteCar,
  removeFavouriteCar,
} from '../../redux/cars/favouriteSlice';
import icon from '../../images/sprite.svg';
import { toastError, toastSuccess } from 'helpers/toastCase';

const CarItem = ({ car }) => {
  const [showModal, setShowModal] = useState(false);
  const favouriteCars = useSelector(selectFavoriteCars);

  const {
    make,
    photoLink,
    img,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
    accessories,
  } = car;

  const toggleModal = () => {
    setShowModal(state => !state);
  };

  const dispatch = useDispatch();

  const carIsFavorite = favouriteCars.some(
    favoriteCar => favoriteCar.id === car.id
  );

  const favoriteIcon = carIsFavorite ? 'heart-active' : 'heart-normal';

  const handleToggleFavourite = () => {
    if (carIsFavorite) {
      toastError('You remove from favourites ', `${car.make} ${car.model}`);
      dispatch(removeFavouriteCar(car));
    } else {
      toastSuccess('You add to favourites ', `${car.make} ${car.model}`);
      dispatch(addFavouriteCar(car));
    }
  };

  return (
    <Wrapper>
      <ImageWrap>
        <HeartButton type="button" onClick={handleToggleFavourite}>
          <svg width="18" height="18">
            <use href={`${icon}#${favoriteIcon}`}></use>
          </svg>
        </HeartButton>

        <Image src={img || photoLink} alt={make} />
      </ImageWrap>
      <TitleWrap>
        <Title>
          {make} {''}
          <Span>{model}</Span>, {year}
        </Title>
        <Text> {rentalPrice}</Text>
      </TitleWrap>
      <List>
        <Item>{address.split(',')[1]}</Item>
        <Item>{address.split(',')[2]}</Item>
        <Item>{rentalCompany}</Item>
        <Item>{type}</Item>
        <Item>{model}</Item>
        <Item>{mileage}</Item>
        <Item>{accessories[0]}</Item>
      </List>

      <Button paddingX={99.5} onClick={toggleModal}>
        Learn More
      </Button>

      {showModal && <Modal onClose={toggleModal} car={car} />}
    </Wrapper>
  );
};

export default CarItem;
