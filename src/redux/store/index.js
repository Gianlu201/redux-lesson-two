import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cartReducer from '../reducers/cart';
import userReducer from '../reducers/user';
import bookReducer from '../reducers/book';

// con combineReducers vogliamo compattare tutte le fette (e tutti i
// reducers) dentro un'unica "pizza"

const greatReducer = combineReducers({
  // inserisco qui i nomi delle "fette" con i relativi reducers per la
  // loro gestione
  cart: cartReducer,
  user: userReducer,
  book: bookReducer,
});

const store = configureStore({
  // qua va il reducer dello store di Redux
  reducer: greatReducer,
});

export default store;
