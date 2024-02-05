import styled from 'styled-components';

// Del all fill in sprite!
export const SVG = styled.svg`
  width: 48px;
  height: 48px;
  fill: #03a9f4;
  transition: var(--transition);

  &:hover,
  &:focus {
    fill: var(--light-blue-color);
  }
`;
