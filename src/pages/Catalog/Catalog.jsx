import Button from 'components/Button';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCarsThunk,
  fetchLoadMoreCarsThunk,
} from '../../redux/cars/carsOperation';
import CarsList from 'components/CarsList';
import { LIMIT_PER_PAGE } from '../../constants/constants';
import Loader from 'components/Loader';
import Filters from 'components/Filters';
import { selectVisibleCars } from '../../redux/filters/filterSelectors';
import { StyledCatalogPage } from './Catalog.styled';
import ServiceMessage from 'components/ServiceMessage';
import ErrorMessage from 'components/ServiceMessage/ErrorMessage';
import { clearFilter } from '../../redux/filters/filterSlice';
import { carsSelectors } from '../../redux/cars';

const Catalog = () => {
  const isLoading = useSelector(carsSelectors.selectIsLoading);
  const isError = useSelector(carsSelectors.selectIsError);
  const [currentPage, setCurrentPage] = useState(2);
  const visibleCars = useSelector(selectVisibleCars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarsThunk());

    return () => {
      dispatch(clearFilter());
    };
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(fetchLoadMoreCarsThunk(currentPage));
    setCurrentPage(currentPage + 1);
  };

  const isShowButton = !isLoading && !(visibleCars.length % LIMIT_PER_PAGE);

  return (
    <StyledCatalogPage>
      {isError ? (
        <ErrorMessage />
      ) : (
        <>
          <Filters />
          {isLoading && <Loader />}
          {visibleCars?.length ? (
            <CarsList cars={visibleCars} />
          ) : (
            !isLoading && (
              <ServiceMessage
                message={'No cars on your request. Change filter settings'}
              />
            )
          )}
          {isShowButton && (
            <Button
              paddingX={99.5}
              onClick={handleLoadMore}
              disabled={isLoading}
            >
              {isLoading ? 'Loading...' : ' Load More'}
            </Button>
          )}
        </>
      )}
    </StyledCatalogPage>
  );
};

export default Catalog;
