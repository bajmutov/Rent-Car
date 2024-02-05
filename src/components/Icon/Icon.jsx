import { ReactComponent as IconInsta } from '../../images/insta.svg';
import sprite from '../../images/sprite.svg';
import { SVG } from './Icon.styled';

export default function Icon({ name, size = 48 }) {
  if (name === 'insta') return <IconInsta width={size} height={size} />;
  return (
    <SVG>
      <use href={sprite + '#' + name} width={size} height={size}></use>
    </SVG>
  );
}
