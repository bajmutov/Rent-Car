import CarItem from 'components/CarItem';
import { WrapperList } from './CarsList.styled';

const CarsList = ({ cars }) => {
  return (
    <WrapperList>
      {cars.map(car => (
        <CarItem key={car.id} car={car} />
      ))}
    </WrapperList>
  );
};

export default CarsList;
