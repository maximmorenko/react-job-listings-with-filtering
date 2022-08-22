// Всего нам нужно три єкшна, один добавляет фильтр, другой удаляет один фильтр, третий удаляем все фильтры

// создаем константы єкшинов
export const ADD_FILTER = 'ADD_FILTER';
export const REMOVE_FILTER = 'REMOVE_FILTER';
export const CLEAR_FILTER = 'CLEAR_FILTERS';

// создаем экшн криейтор, который принимает какой-то фильтр и возвращает обект
export const addFilter = (filter) => ({
    type: ADD_FILTER,
    filter,
});

export const removeFilter = (filter) => ({
    type: REMOVE_FILTER,
    filter,
});

export const clearFilter = {
    type: CLEAR_FILTER,
};