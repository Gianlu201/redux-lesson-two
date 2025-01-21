// qui dentro andrò a creare la funzione REDUCER del mio Redux Store
// la funzione REDUCER è fondamentale perché è la creatrice materiale dello
// STATO dell'applicativo e delle sue successive interazioni

import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions';

const initialState = {
  // qui dentro vado a definire come sarà lo stato di questo reducer

  content: [],
  // eventualmente altre proprietà...
};

// il reducer deve SEMPRE essere una funzione PURA:
// 1) dato lo stesso input, ritornerà sempre lo stesso output
// 2) NON deve contattare l'internet o fare side-effect
// 3) NON deve MAI mutare i propri parametri (eg. state, action)

const cartReducer = (state = initialState, action) => {
  // questa funzione ritornerà secmpre il nuovo STATO dell'applicativo
  // all'inizio, quando l'app si carica per la prima volta, creiamo noi
  // "a mano" la prima BIGLIA, ovvero lo stato iniziale di Redux: lo creiamo
  // a partire da initialState, ovvero il valore di default del parametro "state"

  // in ogni reducer va implementato uno SWITCH CASE
  switch (action.type) {
    case ADD_TO_CART:
      return {
        // questo nuovo oggetto che vado a creare sarà il NUOVO
        // stato di Redux per l'applicativo!
        ...state, // mi sto portando dentro questo nuovo oggetto ("guscio")
        // tutte le proprietà dell'oggetto state

        content: state.content.concat(action.payload),
        // concat TORNA SEMPRE UN UOVO ARRAY! non modifica quello esistente
      };

    case REMOVE_FROM_CART:
      return {
        ...state,

        content: state.content.filter((book, i) => {
          // devo controllare ogni book: unio di essi NON deve far parte
          // del nuovo array
          // if (action.payload === i) {
          //   ho trovato il libro da rimuovere!
          //   lo filtro via
          //   return false;
          // } else {
          //   return true;
          // }

          return action.payload !== i;
        }),
      };

    default:
      // defaul tè la casistica che avviene quando nessuna delle precedenti
      // viene colpita
      // cosa facciamo come default quando NON SAPPIAMO come calcolare
      // il nuovo stato dell'app?
      return state; // ritorno lo stato corrente come NUOVO STATO
  }
};

export default cartReducer;
