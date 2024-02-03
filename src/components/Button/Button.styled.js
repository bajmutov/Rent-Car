import styled from '@emotion/styled';

export const StylesButton = styled.button`
  border-radius: 12px;
  color: var(--white-text-color);
  background-color: var(--light-blue-color);
  padding: ${({ paddingY, paddingX }) => `${paddingY}px ${paddingX}px`};
  margin: 0 auto;
  display: block;
  border: none;
  transition: var(--transition);

  &:hover,
  &:focus {
    background-color: var(--dark-blue-color);
  }
`;
