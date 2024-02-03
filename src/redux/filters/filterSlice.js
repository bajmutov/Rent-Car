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
  },
});

export const { addFilters } = filterSlice.actions;

export const filtersReducer = filterSlice.reducer;
