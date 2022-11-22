import { combineReducers, configureStore } from '@reduxjs/toolkit';
import coinsSlice from './bitcoins/bitcoins';

const reducer = combineReducers({
  coinSlice: coinsSlice,
});

const coinsStore = configureStore({ reducer });

export default coinsStore;
