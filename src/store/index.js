import { createStore } from 'redux';
import { rootReduser } from './root-reduser'

// для работы персиста ниобходимо импортировать дополнительные хелперы
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// для работы персиста создаем конфиг с ключами
const persistConfig = {
    key: 'root',
    storage,
    // по умолчанию имеет два ключа, таже можно добавить массивы whiteList or blackList
    whiteList: ['filters', 'positions'], //содержит список который нужно включить в локал
    // по умолчанию все что есть в сторе бедет включено, эти списки для исключений или выборочного включения
    // проверка (в логах aplication / locale sorige)
    // blackList: [], //содержит список который НЕ нужно включить в локал
    // можно использовать один, на выбор
}

// также нужно создать персист редюсер, обертка над нашим рутРедюсером
const persistedReducer = persistReducer(persistConfig, rootReduser)

export const store = createStore(
    // меняем обычный рутредусер на персистРудюсер
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //для запуска расширения React Developer Tools
);

// также нужно експортировать персистерСтор
export const persistor = persistStore(store);
