import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import types from '../types/types';

const initialState = {
  coins: [],
};

const URL = 'https://api1.binance.com/api/v3/ticker/24hr';

export const fetchCoins = createAsyncThunk(types.COINS_FETCHED, async () => {
  const response = await axios.get(URL);
  return response.data;
});

const coinsSlice = createSlice({
  name: 'coinSlice',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCoins.fulfilled]: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.coins = action.payload.filter((coin) => coin.count > 150000);
      console.log(state.coins);
    },
  },
});

export default coinsSlice.reducer;
