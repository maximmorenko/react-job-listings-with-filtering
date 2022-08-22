import { ADD_FILTER, REMOVE_FILTER, CLEAR_FILTER } from './filter-actions'

// редюсер принимает стейт (по умолчанию пустой массив), и єкшны
export const filterReduser = (state = [], action) => {
    // используем свич по єшн типу
    switch (action.type) {

        case ADD_FILTER: {
            // если мы получили тип события "добавить фильтр" 
            // то мы должны взять наше исходное значение и добавить туда полученый фильтр
            return [...state, action.filter];
        }

        case REMOVE_FILTER: {
            // если мы получили тип события "удалить фильтр" 
            // то мы должны взять наш текущий стейт и отфильтровать его по фильтру из экшна
            return state.filter(item => item !== action.filter);
        }
        
        case CLEAR_FILTER: {
            // при событии очистить, воозвращаем пустой массив
            return [];
        }

        default: {
            // по дефолту всегда возвращаем стейт как он есть
            return state;
        }
    }

}