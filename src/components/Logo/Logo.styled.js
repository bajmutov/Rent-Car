import styled from 'styled-components';

export const StyledLogo = styled.button`
line-height: 1.5;
  font-size: 24px;
  font-weight: 900;
  padding: 0;
  line-height: 0;
  border: none;
  background-color: transparent;

  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 8px;
  transition: var(--transition);

  &:hover, 
  &:focus{
    color: var(--dark-blue-color);
    transform: scale(1.01);
  }
`;

