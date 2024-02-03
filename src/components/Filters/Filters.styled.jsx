import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 50px;
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: end;
  row-gap: 10px;
`;

export const Label = styled.label`
  width: 320px;
  position: relative;
  margin-right: 18px;
  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: var(--grey-text-color);
`;

export const DoubleInput = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

export const WrapperInput = styled.div`
  position: relative;
  margin-top: 8px;
`;

export const TextBeforeInput = styled.span`
  position: absolute;
  left: 18px;
  top: 14.5px;
  font-family: 'Manrope', sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  color: var(--dark-text-color);
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  border-radius: 14px;
  border: none;
  background-color: var(--background-second-grey-color);
  font-family: 'Manrope', sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;

  &:focus {
    outline: none;
  }
`;

export const Button = styled.label`
  width: 136px;
  height: 48px;
  text-align: center;
  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 48px;
  color: var(--light-text-color);
  border-radius: 12px;
  background-color: var(--normal-button-color);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--hover-button-color);
  }
`;
