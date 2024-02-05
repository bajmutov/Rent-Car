import styled from 'styled-components';
import { StyledInput } from './Input/Input.styled';
import { ReactComponent as IconArrow } from '../../images/arrow.svg';

export const FormWrripper = styled.div`
  display: flex;
  justify-content: center;
  gap: 18px;
  align-items: flex-end;
`;

export const FilterForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 18px;
`;

export const FilterFormItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: flex-start;
`;

export const FilterFormLabel = styled.label`
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: var(--filter-grey-color);
`;

export const FilterFormCustomSelect = styled.div`
  position: relative;
  display: inline-block;
  display: flex;
`;

export const FilterFormSelect = styled.select`
  color: var(--main-text-color);
  height: 48px;
  width: ${({ $width }) => `${$width}px`};
  border-radius: 14px;
  border: none;
  padding: 14px 18px;
  background: #f7f7fb;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  cursor: pointer;

  font-weight: 500;
  font-size: 18px;
  line-height: 111%;

  &:focus,
  &:hover {
    outline: 1px solid var(--light-blue-color);
  }
`;

export const SelectArrow = styled(IconArrow)`
  fill: #03a9f4;
  transition: var(--transition);
  height: 24px;
  width: 24px;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  pointer-events: none;

  &:hover,
  &:focus {
    fill: var(--light-blue-color);
  }
`;

export const FilterFormMileageInput = styled.div`
  display: flex;
`;

export const FilterFormInputFrom = styled(StyledInput)`
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  border-radius: 14px 0 0 14px;
`;

export const FilterFormInputTo = styled(StyledInput)`
  border-radius: 0 14px 14px 0;
`;

export const FilterButton = styled.button`
  border-radius: 12px;
  color: var(--white-text-color);
  background-color: var(--light-blue-color);
  padding: 14px 44px;
  display: block;
  border: none;
  transition: var(--transition);
  font-size: 14px;
  line-height: calc(20 / 14);

  &:hover,
  &:focus {
    background-color: var(--dark-blue-color);
  }
`;
