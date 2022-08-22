export const selectAllPositions = (state) => state.positions; // positions - ключ позишнРедюсера из комбаинРедюсера

// функция фильтрации, принимает не только стейт но и наборы фильтров
export const selectVisiblePositions = (state, filters = []) => {
    // если фильтров нет, т.е длина массива равна 0, то возвращаем текущие позиции из стейта
    if (filters.length === 0) return state.positions;
    return state.positions.filter(pos => {
        // запишем в переменную набор фильтров привязаных к конкретной позиции.
        // Соберем их также как мы собирали беджи, путем конкатинации
        const posFilters = [].concat(pos.role, pos.level, ...pos.languages, ...pos.tools);
        // метод every сопоставляет содержимое массивов, 
        // если строковые значения одинаковы, то возвращает тру и записываем в стейт набор фильтров
        // сравним елементы массивов filters и posFilters
        return filters.every(posfilter => posFilters.includes(posfilter));
    })
};
