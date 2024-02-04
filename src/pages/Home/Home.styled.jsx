import styled from '@emotion/styled';
import Image from '../../images/car.jpg';

export const Wrapper = styled.div`
  padding: 150px 200px;
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
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
`;
