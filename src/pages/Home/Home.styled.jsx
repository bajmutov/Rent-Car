import styled from '@emotion/styled';
// import { Link } from 'react-router-dom';
import Image from '../../images/car.jpg';

export const Wrapper = styled.div`
  /* display: flex;
  flex-direction: column; */
  padding: 150px 200px;
  /* margin: 0 auto; */
  /* background-color: red; */
  /* flex-direction: column; */
  background-image: url(${Image});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  width: 1240px;
  height: 60vh;
  overflow: hidden;
`;

export const Heading = styled.h1`
  color: var(--white-text-color);
  text-align: center;
  /* width: 460px; */
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
`;

export const Text = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  color: var(--white-text-color);
  text-align: center;
  /* width: 460px; */
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
`;
