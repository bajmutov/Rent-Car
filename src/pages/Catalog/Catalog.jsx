import Button from 'components/Button';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCarsThunk,
  fetchLoadMoreCarsThunk,
} from '../../redux/cars/carsOperation';
import { selectAllCars, selectIsLoading } from '../../redux/cars/carsSelectors';
import CarsList from 'components/CarsList';
import { LIMIT_PER_PAGE } from '../../constants/constants';
import Loader from 'components/Loader';
import Filters from 'components/Filters';
import { getAllFilters } from '../../redux/filters/filterSelectors';

const Catalog = () => {
  const allCars = useSelector(selectAllCars);
  const isLoading = useSelector(selectIsLoading);
  const [currentPage, setCurrentPage] = useState(2);
  // const visibleCars = useSelector(selectVisibleCars);

  const [visibleCars, setVisibleCars] = useState([]);
  const { brand, price, mileageFrom, mileageTo } = useSelector(state => {
    console.log('state', state.filters);
    return state.filters;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarsThunk());
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(fetchLoadMoreCarsThunk(currentPage));
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    if (!brand && !price && !mileageFrom && !mileageTo) {
      if (!mileageFrom && !mileageTo) {
        setVisibleCars(allCars);
      }
    } else {
      let filteredCars = [...allCars];

      if (brand)
        filteredCars = filteredCars.filter(
          car => car.make.trim().toLowerCase() === brand.trim().toLowerCase()
        );

      if (price)
        filteredCars = filteredCars.filter(
          car => parseInt(car.rentalPrice.replace('$', ''), 10) <= price
        );

      if (mileageFrom || mileageTo) {
        filteredCars = filteredCars.filter(
          car =>
            mileageFrom <= car.mileage &&
            (car.mileage <= mileageTo || !mileageTo)
        );
      }

      setVisibleCars(filteredCars);
    }
  }, [brand, price, mileageFrom, mileageTo, allCars]);

  const isShowButton = allCars.length > 0 && !(allCars.length % LIMIT_PER_PAGE);

  return (
    <>
      <Filters />

      {isLoading && <Loader />}
      {visibleCars.length && <CarsList cars={visibleCars} />}
      {isShowButton && (
        <Button paddingX={99.5} onClick={handleLoadMore} disabled={isLoading}>
          {isLoading ? 'Loading...' : ' Load More'}
        </Button>
      )}
    </>
  );
};

export default Catalog;
