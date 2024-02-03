import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favourites: [],
};

const favouriteSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addFavouriteCar: (state, { payload }) => {
      state.favourites.push(payload);
    },
    removeFavouriteCar: (state, { payload }) => {
      const updatedfavourites = state.favourites.filter(
        item => item.id !== payload.id
      );
      state.favourites = updatedfavourites;
    },
  },
});

export const { addFavouriteCar, removeFavouriteCar } = favouriteSlice.actions;

export const favouriteReducer = favouriteSlice.reducer;
