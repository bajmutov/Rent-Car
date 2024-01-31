import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 600;
  font-size: 20px;
  transition: var(--transition);

  &.active {
    color: var(--light-blue-color);
    text-decoration: underline;
  }

  &:hover, 
  &:focus{
    color: var(--dark-blue-color);
    transform: scale(1.05);
  }
`;