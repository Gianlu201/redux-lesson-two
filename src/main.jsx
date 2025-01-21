import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux'; // importa un componente apposito per React
import store from './redux/store/index.js';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);

// REDUX: ISTRUZIOINI PER L'USO
// 1) creare il primo reducer
// 2) utilizzarlo per configurare lo store in /redux/store/index.js
// 3) utilizzare lo store creato ed esportato come prop "store" per Provider
