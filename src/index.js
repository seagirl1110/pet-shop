import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
const basename = process.env.NODE_ENV === 'production' ? '/pet-shop' : '';
root.render(
  <BrowserRouter basename={basename}>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
