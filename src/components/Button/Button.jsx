import { StylesButton } from './Button.styled';

export default function Button({
  children,
  paddingY = 12,
  paddingX = 50,
  disabled,
  onClick,
}) {
  return (
    <StylesButton
      paddingY={paddingY}
      paddingX={paddingX}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </StylesButton>
  );
}
