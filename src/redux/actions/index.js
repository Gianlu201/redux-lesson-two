export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const SET_USER = 'SET_USER';

// questo è un ACTION CREATOR
// un ACTIOON CREATOR è una funzione che ritorna una ACTION
export const addToCartAction = (bookSelected) => ({
  type: ADD_TO_CART,
  payload: bookSelected,
});

export const removeFromCartAction = (i) => ({
  type: REMOVE_FROM_CART,
  payload: i,
});

export const setUserAction = (inputValue) => ({
  type: SET_USER,
  payload: inputValue,
});
