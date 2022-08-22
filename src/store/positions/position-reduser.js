import { ADD_POSITIONS } from './position-actions'

// редюсер принимает стейт (по умолчанию пустой массив), и єкшн
export const positionsReduser = (state = [], action) => {
    // используем свич по єшн типу
    switch (action.type) {
        case ADD_POSITIONS: {
            // если мы получили тип события "добавить позиции" то возвращаем позиции полученые из экшна
            return action.positions;
        }

        default: {
            // по дефолту всегда возвращаем стейт как он есть
            return state;
        }
    }

}