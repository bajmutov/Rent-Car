import styled from '@emotion/styled';
// import { Link } from 'react-router-dom';
import Image from '../../images/car.jpg';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 150px 200px ;
  /* background-color: red; */
    flex-direction: column;
  background-image: url(${Image});
  /* background-image: url("./car.jpg"); */
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  width: 1440px;
  height: 50vh;
  overflow: hidden;
`;

export const Heading = styled.h1`
  color:var(--white-text-color);
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
  color:var(--white-text-color);
  text-align: center;
  /* width: 460px; */
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
`;


// export const Button = styled(Link)`
//   display: flex;
//   width: 140px;
//   height: 2px;
//   padding: 24px 10px;
//   justify-content: center;
//   align-items: center;
//   border-radius: 12px;
//   background: #3470ff;
//   color: #fff;
//   margin-top: 60px;
//   margin-left: auto;
//   margin-right: auto;
//   font-family: 'Manrope';
//   font-size: 14px;
//   font-style: normal;
//   font-weight: 600;
//   line-height: 1.42;
//   text-transform: uppercase;
//   text-decoration: none;
//   box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
//     0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
//   &:hover {
//     background-color: #0b44cd;
//   }
// `;