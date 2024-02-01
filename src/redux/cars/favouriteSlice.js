import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoritesCars: [],
};

export const favoritesCarsSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavoriteCar: (state, action) => {
      state.favoritesCars.push(action.payload);
    },
    removeFavoriteCar: (state, action) => {
      const updatedFavorites = state.favoritesCars.filter(
        item => item.id !== action.payload.id
      );
      state.favoritesCars = updatedFavorites;
    },
  },
});

export const { addFavoriteCar, removeFavoriteCar } = favoritesCarsSlice.actions;

export default favoritesCarsSlice.reducer;
