// import { useDispatch, useSelector } from 'react-redux';
// import { carsSelectors } from '../../redux/cars/carsSelectors';
// import {
//   addFavorite,
//   deleteFavorite,
// } from '../../redux/cars/carsOperations';
import { CSSTransition } from 'react-transition-group';
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
} from './CarItem.styled';
// import { TitleText, DescriptionText } from '../../components';
import { useState } from 'react';
import Button from 'components/Button';
import Modal from 'components/Modal';
// import { ReactComponent as NormalHeartIcon } from '../../assets/Svg/normalHeart.svg';
// import { ReactComponent as FavoriteHeartIcon } from '../../assets/Svg/activeHeart.svg';

const CarItem = ({ car }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(state => !state);
  };

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

  //   const favoriteCars = useSelector(carsSelectors.getFavoriteCars);
  //   const dispatch = useDispatch();

  //   const isFavoriteCar = () => favoriteCars.some(car => car.id === id);

  //   const toggleHeart = () => {
  //     if (isFavoriteCar()) {
  //       dispatch(deleteFavorite(id));
  //     } else {
  //       dispatch(addFavorite(car));
  //     }
  //   };

  //   const onClickLearnMore = () => openModal(id);

  return (
    <Wrapper>
      <ImageWrap>
        {/* <HeartIcon data={data} /> */}
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
