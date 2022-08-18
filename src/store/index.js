import { createStore } from 'redux';
import { rootReduser } from './root-reduser'

export const store = createStore(
    rootReduser, //комбаин редюсеров
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //для запуска расширения React Developer Tools
);