// import { useSelector } from 'react-redux';
// import { selectFilteredContacts } from 'redux/selectors';
import { Container, List } from '@chakra-ui/react';
import CarItem from 'components/CarItem';
import { WrapperList } from './CarsList.styled';
// import ContactItem from './ContactItem';

// import { useSelector } from "react-redux";
// import { selectAllCars } from "redux/cars/carsSelectors";

const CarsList = ({ cars }) => {
  console.log('cars', cars)

  return (
    // <p>ContactList</p>
    <div>
      <WrapperList>
      {cars.map(car => (
        <CarItem key={car.id} car={car} />
      ))}
      </WrapperList>
    </div>
  );

    // <div>
    //   <ul>
    //     {filteredContacts &&
    //       filteredContacts.map((car) => (
    //         <CartItem key={id}  />
    //       ))}
    //   </ul>
    // </div>+
  
};

export default CarsList;
