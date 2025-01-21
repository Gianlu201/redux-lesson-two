export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const SET_USER = 'SET_USER';
export const GET_BOOKS_SUCCESS = 'GET_BOOKS_SUCCESS';
export const GET_BOOKS_ERROR = 'GET_BOOKS_ERROR';

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

// normalmente, in Redux è possibile solamente "dispatchare" ACTIONS
// tuttavia, per gestire eventuali operazioni asincrone e ad andare a
// riempire lo stato di Redux con dati es. provenienti da chiamate API,
// è possibile implementare il dispatch di strutturre aggiuntive
// il pacchetto che abbiamo installato, @reduxjs/toolkit è di fatto
// una libreria "OPINIONATED" -> questo comporta che arriva già con un
// plugin installato: "redux-thunk"
// grazie a redux-thunk nmoi abbiamo gia inserita la capacità di
// effettuare il dispatch di vere e proprie funzioni

export const thunkActionExample = () => {
  return async (dispatch) => {
    // il contenuto di questa funzione verrà eseguito durante
    // l'operazione di DISPATCH
    // alla fine della nostra logica noi possiamo "dispatchare"
    // il risultato delle nostre operazioni tramite il metodo
    // dispatch, che ci viene fornito come parametro di questa funzione
    console.log('BLABLA');
    setTimeout(() => {
      dispatch({ type: 'CIAO' });
    }, 3000);
  };
};

export const getBooksAction = () => {
  return async (dispatch) => {
    try {
      let resp = await fetch(
        'https://striveschool-api.herokuapp.com/food-books'
      );
      if (resp.ok) {
        let fetchedBooks = await resp.json();
        console.log(fetchedBooks);
        dispatch({
          type: GET_BOOKS_SUCCESS,
          payload: fetchedBooks,
        });
      } else {
        throw new Error('Errore nel recupero libri');
      }
    } catch (error) {
      console.log(error);
      // in caso di errore dispatchiamo una action che informerà il reducer
      // che qualcosa è andato storto
      dispatch({
        type: GET_BOOKS_ERROR,
        payload: 'Errore nel recupero libri',
      });
    }
  };
};
