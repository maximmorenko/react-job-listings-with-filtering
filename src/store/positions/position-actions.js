// нам нужен один екшн , который будет добавлять все позиции
// константы будем хранить здесь же

// создаем константу для типа нашего єкшина
export const ADD_POSITIONS = 'ADD_POSITIONS';

// создаем экшн криейтор, который принимает позиции и возвращает обект
export const addPositions = (positions) => ({
    type: ADD_POSITIONS,
    positions,
    // позишнс также можно было достать из пэйлоад 
    // payload: positions,
})