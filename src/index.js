import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './index.css';
import App from './App';
import { store, persistor } from './store'

// для работы персиста импортируем персистГейт (провайдер) и оборачиваем в него наше пришожение
import { PersistGate } from 'redux-persist/integration/react'

// обернем приложение в провайдер из реакт-редакс
ReactDOM.render(
    <React.StrictMode>
        {/* в провайдер обязатеьно передаем стор */}
        <Provider store={store}>
            <PersistGate 
            // PersistGate требеет ключи:
            loading={null} //прелоадер
            persistor={persistor}
            >
                <App />
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
