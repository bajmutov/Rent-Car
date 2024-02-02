// import { useSelector } from 'react-redux';
// import { carsSelectors } from 'redux/Cars/carsSelectors';
// import { CarsList, ServiceMessage } from '../../components';

import Button from 'components/Button';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCarsThunk,
  fetchLoadMoreCarsThunk,
} from '../../redux/cars/carsOperation';
import { selectAllCars, selectIsLoading } from '../../redux/cars/carsSelectors';
import CarsList from 'components/CarsList';
import { LIMIT_PER_PAGE } from 'constants';

const Catalog = () => {
  //   const favoriteCars = useSelector(carsSelectors.getFavoriteCars);

  const allCars = useSelector(selectAllCars);
  const isLoading = useSelector(selectIsLoading);
  const [currentPage, setCurrentPage] = useState(2);
  // const [cars, setCars] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarsThunk());
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(fetchLoadMoreCarsThunk(currentPage));
    setCurrentPage(currentPage + 1);
  };

  const isShowButton = allCars.length > 0 && !(allCars.length % LIMIT_PER_PAGE);

  return (
    <>
      {/* <p>Catalog</p> */}
      {/* <Filters /> */}
      <CarsList cars={allCars} />
      {isShowButton && (
        <Button paddingX={99.5} onClick={handleLoadMore} disabled={isLoading}>
          {isLoading ? 'Loading...' : ' Load More'}
        </Button>
      )}
    </>
  );
};

export default Catalog;
