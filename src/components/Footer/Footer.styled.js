import styled from 'styled-components';

export const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: var(--grey-color);
  padding: 32px 0px;
  box-shadow: 34px 12px 14px 30px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const StyledFooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledFooterMetaContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const StyledFooterMetaLink = styled.a`
  color: var(--main-text-color);
  font-weight: 600;
  transition: var(--transition);

  &:hover,
  &:focus {
    color: var(--light-blue-color);
  }
`;

export const StyledFooterMediaContainer = styled.ul`
  display: flex;
  gap: 8px;
`;
