import styled from 'styled-components';
import { ReactComponent as CloseIcon } from '../../images/close.svg';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  height: 672px;
  max-width: 461px;
  width: 100%;
  padding: 40px;
  background-color: var(--white-text-color);
  border-radius: 24px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

export const BtnClose = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  width: 24px;
  height: 24px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--white-text-color);
  border: none;
  border-radius: 50%;
`;

export const SvgX = styled(CloseIcon)`
  fill: var(--main-text-color);
  transition: fill var(--transition);

  &:hover,
  &:focus {
    fill: var(--dark-blue-color);
  }
`;

export const ImgWrapper = styled.div`
  width: 461px;
  height: 248px;
  display: block;
  background: center;
  border-radius: 14px;
  overflow: hidden;
`;

export const ImgStyled = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

export const NameDivStyled = styled.div`
  color: var(--primary-black-color);
  font-size: 18px;
  font-weight: 500;
  line-height: calc(24 / 18);
  margin-top: 14px;
`;

export const ModelSpanStyled = styled.span`
  color: var(--light-blue-color);
`;

export const AdressInfoWrap = styled.p`
  font-size: 12px;
  line-height: calc(18 / 12);
  margin-top: 8px;
  margin-bottom: 0;
`;

export const TextInfo = styled.p`
  font-size: 12px;
  line-height: calc(18 / 12);
  margin-top: 4px;
  margin-bottom: 0;
`;

export const Description = styled.span`
  color: var(--alternative-grey-color);

  &:not(:last-child):after {
    color: rgba(18, 20, 23, 0.1);
    content: '|';
    padding: 0 3px;
  }
`;

export const DescriptionText = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: calc(20 / 14);

  margin-top: 14px;
  margin-bottom: 0;
`;

export const AccessoriesText = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: calc(20 / 14);
  margin-top: 24px;
  margin-bottom: 0;
`;

export const RentalText = styled.p`
  color: var(--main-text-color);
  font-size: 14px;
  font-weight: 500;
  line-height: calc(20 / 14);
  margin-bottom: 0;
  margin-top: 24px;
`;

export const RentalConditionsWrap = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`;

export const DescriptionRentalWrap = styled.div`
  display: flex;
  padding: 7px 14px;
  justify-content: center;
  align-items: center;
  gap: 2px;
  border-radius: 35px;
  background: #f9f9f9;

  color: var(--secondary-black-color);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.24px;
`;

export const AccentSpanStyled = styled.span`
  color: var(--light-blue-color);
  font-weight: 600;
`;

export const BtnRental = styled.button`
  width: 100%;
  max-width: 168px;
  height: 44px;
  padding: 12px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--light-blue-color);
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  border-radius: 12px;
  border: none;
  margin-top: 24px;
  transition: background-color var(--transition);

  &:hover,
  &:focus {
    background-color: var(--dark-blue-color);
  }
`;
