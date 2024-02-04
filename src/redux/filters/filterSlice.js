import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  brand: null,
  price: null,
  mileageFrom: null,
  mileageTo: null,
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    addFilters(state, { payload }) {
      const { brand, price, mileageFrom, mileageTo } = payload;
      state.brand = brand;
      state.price = price;
      state.mileageFrom = mileageFrom;
      state.mileageTo = mileageTo;
    },
    clearFilter: state => {
      state.brand = null;
      state.price = null;
      state.mileageFrom = null;
      state.mileageTo = null;
    },
  },
});

export const { addFilters, clearFilter } = filterSlice.actions;

export const filtersReducer = filterSlice.reducer;
