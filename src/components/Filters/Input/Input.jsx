import { StyledInput } from './Input.styled';

const Input = ({ type, name, placeholder, id }) => {
  return (
    <StyledInput type={type} name={name} placeholder={placeholder} id={id} />
  );
};

export default Input;
