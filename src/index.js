import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './index.css';
import App from './App';
import { store } from './store'

// обернем приложение в провайдер из реакт-редакс
ReactDOM.render(
  <React.StrictMode>
    {/* в провайдер обязатеьно передаем стор */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
