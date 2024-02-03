import { StylesButton } from './Button.styled';

export default function Button({
  children,
  paddingY = 12,
  paddingX = 50,
  disabled,
  onClick,
}) {
  const handleClick = () => {
    document.activeElement.blur();
    onClick?.();
  };

  return (
    <StylesButton
      paddingY={paddingY}
      paddingX={paddingX}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </StylesButton>
  );
}
