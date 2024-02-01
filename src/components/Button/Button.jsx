import { StylesButton } from './Button.styled';

export default function Button({ children, paddingY = 12, paddingX = 50 }) {
  return (
    <StylesButton paddingY={paddingY} paddingX={paddingX}>
      {/* <Text>{text}</Text> */}
      {children}
    </StylesButton>
  );
}
