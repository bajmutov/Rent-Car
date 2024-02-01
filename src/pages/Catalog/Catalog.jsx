// import { useSelector } from 'react-redux';
// import { carsSelectors } from 'redux/Cars/carsSelectors';
// import { CarsList, ServiceMessage } from '../../components';

import Button from 'components/Button';

export const Catalog = () => {
  //   const favoriteCars = useSelector(carsSelectors.getFavoriteCars);

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
