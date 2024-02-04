import styled from 'styled-components';

export const StyledInput = styled.input`
  color: var(--main-text-color);
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  color: #121417;
  width: 160px;

  height: 48px;
  box-sizing: border-box;

  border: none;
  padding: 14px 18px;
  background: #f7f7fb;

  &::placeholder {
    color: var(--main-text-color);
  }

  &:focus {
    outline: 1px solid var(--light-blue-color);
  }
`;
