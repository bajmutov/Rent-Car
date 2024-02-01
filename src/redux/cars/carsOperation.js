import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6529142055b137ddc83e2c0b.mockapi.io/api';
// https://6529142055b137ddc83e2c0b.mockapi.io/api/cars

export const fetchCarsThunk = createAsyncThunk(
  'cars/fetchCars',
  async (params, thunkAPI) => {
    try {
      const response = await axios.get('/cars', { params });
      console.log(response.data);
      return response.data;
    } catch (e) {
      // toast.error(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
