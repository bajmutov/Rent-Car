import { createSelector } from '@reduxjs/toolkit';

export const getFiltersBrand = state => state.filters.brand;
export const getFiltersPrice = state => state.filters.price;
export const getFiltersMileageFrom = state => state.filters.mileageFrom;
export const getFiltersMileageTo = state => state.filters.mileageTo;

export const getAllFilters = state => state.filters;

export const selectAllCars = state => state.cars.allCars;

export const selectVisibleCars = createSelector(
  [selectAllCars, getFiltersMileageFrom, getFiltersMileageTo],
  (allCars, mileageFrom, mileageTo) => {
    if (!mileageFrom && !mileageTo) {
      return allCars;
    } else {
      let filteredCars = [...allCars];

      //   if (brand)
      //     filteredCars = filteredCars.filter(
      //       car => car.make.trim().toLowerCase() === brand.trim().toLowerCase()
      //     );

      //   if (price)
      //     filteredCars = filteredCars.filter(
      //       car => parseInt(car.rentalPrice.replace('$', ''), 10) <= price
      //     );

      if (mileageFrom || mileageTo) {
        filteredCars = filteredCars.filter(
          car =>
            mileageFrom <= car.mileage &&
            (car.mileage <= mileageTo || !mileageTo)
        );
      }

      return filteredCars;
    }
  }
);
