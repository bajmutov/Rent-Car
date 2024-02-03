import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import {
  getCityFromAddress,
  getCountryFromAddress,
  getMinAge,
  getDriverLicense,
  getSecurityDeposit,
  getFormatMileage,
  getFormatRentalPrice,
} from '../../helpers/utils';
import {
  ModalContent,
  BtnClose,
  ImgStyled,
  NameDivStyled,
  ModelSpanStyled,
  AccentSpanStyled,
  Overlay,
  SvgX,
  ImgWrapper,
  AdressInfoWrap,
  Description,
  DescriptionText,
  AccessoriesText,
  TextInfo,
  RentalText,
  RentalConditionsWrap,
  DescriptionRentalWrap,
  BtnRental,
} from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ car, onClose }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const {
    id,
    year,
    make,
    model,
    type,
    img,
    description,
    accessories,
    fuelConsumption,
    engineSize,
    functionalities,
  } = car;
  const city = getCityFromAddress(car);
  const country = getCountryFromAddress(car);
  const minAge = getMinAge(car);
  const license = getDriverLicense(car);
  const deposit = getSecurityDeposit(car);
  const formatMileage = getFormatMileage(car);
  const formatRentalPrice = getFormatRentalPrice(car);

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalContent>
        <BtnClose type="button" onClick={onClose} aria-label="Close button">
          <SvgX />
        </BtnClose>

        <ImgWrapper>
          <ImgStyled src={img} alt={description} />
        </ImgWrapper>

        <NameDivStyled>
          {make} <ModelSpanStyled>{model}</ModelSpanStyled>, {year}
        </NameDivStyled>

        <AdressInfoWrap>
          <Description>{city}</Description>
          <Description>{country}</Description>
          <Description>Id: {id}</Description>
          <Description>Year: {year}</Description>
          <Description>Type: {type}</Description>
        </AdressInfoWrap>

        <TextInfo>
          <Description>Fuel Consumption: {fuelConsumption}</Description>
          <Description>Engine Size: {engineSize}</Description>
        </TextInfo>

        <DescriptionText>{description}</DescriptionText>

        <AccessoriesText>Accessories and functionalities:</AccessoriesText>

        <AdressInfoWrap>
          <Description>{accessories[0]}</Description>
          <Description>{accessories[1]}</Description>
          <Description>{accessories[2]}</Description>
        </AdressInfoWrap>

        <TextInfo>
          <Description>{functionalities[0]}</Description>
          <Description>{functionalities[1]}</Description>
          <Description>{functionalities[2]}</Description>
        </TextInfo>

        <RentalText>Rental Conditions:</RentalText>

        <RentalConditionsWrap>
          <DescriptionRentalWrap>
            {minAge.key}: <AccentSpanStyled>{minAge.value}</AccentSpanStyled>
          </DescriptionRentalWrap>
          <DescriptionRentalWrap>{license}</DescriptionRentalWrap>
        </RentalConditionsWrap>

        <RentalConditionsWrap>
          <DescriptionRentalWrap>{deposit}</DescriptionRentalWrap>
          <DescriptionRentalWrap>
            Mileage: <AccentSpanStyled>{formatMileage}</AccentSpanStyled>
          </DescriptionRentalWrap>
          <DescriptionRentalWrap>
            Price: <AccentSpanStyled>{formatRentalPrice}</AccentSpanStyled>
          </DescriptionRentalWrap>
        </RentalConditionsWrap>

        <BtnRental type="button">
          <a href="tel:+380730000000">Rental car</a>
        </BtnRental>
      </ModalContent>
    </Overlay>,
    modalRoot
  );
};

export default Modal;
