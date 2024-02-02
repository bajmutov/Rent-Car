// import { useSelector } from 'react-redux';
// import { carsSelectors } from 'redux/Cars/carsSelectors';
// import { CarsList, ServiceMessage } from '../../components';

import Button from 'components/Button';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarsThunk } from '../../redux/cars/carsOperation';
import { selectAllCars } from '../../redux/cars/carsSelectors';
import CarsList from 'components/CarsList';

const Catalog = () => {
  //   const favoriteCars = useSelector(carsSelectors.getFavoriteCars);
  const allCars = useSelector(selectAllCars);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCarsThunk());
  }, [dispatch]);

  return (
    <>
      {/* <p>Catalog</p> */}
      {/* <Filters /> */}
      <CarsList cars={allCars} />
      <Button paddingX={99.5}>Load More</Button>
    </>
  );
};

export default Catalog;
