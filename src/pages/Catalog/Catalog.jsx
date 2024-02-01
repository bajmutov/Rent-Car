// import { useSelector } from 'react-redux';
// import { carsSelectors } from 'redux/Cars/carsSelectors';
// import { CarsList, ServiceMessage } from '../../components';

import Button from 'components/Button';
import CarsList from 'components/CarsList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCarsThunk } from '../../redux/cars/carsOperation';

export const Catalog = () => {
  //   const favoriteCars = useSelector(carsSelectors.getFavoriteCars);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCarsThunk());
  }, [dispatch]);

  return (
    <>
      <p>Catalog</p>
      {/* <Filters /> */}
      <CarsList />
      <Button paddingX={99.5}>Load More</Button>
    </>
  );
};

export default Catalog;
