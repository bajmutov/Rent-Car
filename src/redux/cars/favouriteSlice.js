import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavoriteCar: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavoriteCar: (state, action) => {
      const updatedFavorites = state.favorites.filter(
        item => item.id !== action.payload.id
      );
      state.favorites = updatedFavorites;
    },
  },
});

export const { addFavoriteCar, removeFavoriteCar } = favoritesSlice.actions;

export default favoritesSlice.reducer;
