import { ADD_POSITIONS } from './position-actions'

// редюсер принимает стейт (по умолчанию пустой массив), и єкшн
export const positionsReduser = (state = [], action) => {
    // используем свич по єшн типу
    switch (action.type) {
        case ADD_POSITIONS: {
            
            return action.positions;
        }

        default: {
            // по дефолту фозвращаем стейт как он есть
            return state;
        }
    }

}