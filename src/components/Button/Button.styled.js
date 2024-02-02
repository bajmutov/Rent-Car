import styled from '@emotion/styled';

export const StylesButton = styled.button`
  // width: 100px;
  border-radius: 12px;
  color: var(--white-text-color);
  background-color: var(--light-blue-color);
  padding: ${({ paddingY, paddingX }) => `${paddingY}px ${paddingX}px`};
  margin: 0 auto;
  display: block;
  transition: var(--transition);

  &:hover,
  &:focus {
    background-color: var(--dark-blue-color);
  }
`;

// muiStyled(Button)(({ theme, width }) => ({
//   width: width,
//   padding: '12px 0 12px 0',
//   borderRadius: '12px',
//   color: theme.palette.getContrastText('#3470FF'),
//   backgroundColor: '#3470FF',
//   '&:hover': {
//     backgroundColor: '#0B44CD',
//   },
// }));

export const Text = styled.span`
  color: #ffffff;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.42;
  text-transform: none;
`;
