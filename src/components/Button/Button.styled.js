import styled from '@emotion/styled';

export const StylesButton = styled.button`
  border-radius: 12px;
  color: var(--white-text-color);
  background-color: var(--light-blue-color);
  padding: ${({ paddingY, paddingX }) => `${paddingY}px ${paddingX}px`};
  /* margin: 0 auto; */
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
