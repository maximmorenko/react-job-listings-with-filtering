// импортируем UI компоненты
import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';

import { useSelector, useDispatch } from 'react-redux';
import { selectFilters } from 'store/filters/filter-selectors';
import { removeFilter, clearFilter } from 'store/filters/filter-actions';

// для очистки фильтр панели нужна функция диспатч и экшины

// фильтр панелль будем показывать после того как в ней появится хотябы один фильтр
// в панель мы будем отрисовывать текущий, актуальный фильтр полученый при клике.
// достанем его из селектора 
export const FilterPanel = () => {
    const dispatch = useDispatch();
    const currentFilters = useSelector(selectFilters);
    // теперь в стеке будем папить текущий массив currentFilter и отрисовівать для него текущий фильтр

    // сделаем проверку, пустая ли панель фильтров, если пустая то не показываем ее (вернем null)
    if (currentFilters.length === 0) {
        return null;
    }

    return (
        <Card className="filter-panel">
            <div className="filter-panel-wrapper">
                <Stack>
                    {/* по умолчанию в фильтр панели устанавливаем все возможные фильтры,
                    вариант clearable уберает ховер с элемента, оставляем только на кнопке (иконка крестик) и добавляет возможность удалить елемент фильтра */}
                    {/* <Badge variant="clearable">Frontend</Badge> */}
                    {/* <Badge variant="clearable">Backend</Badge> */}
                    {/* <Badge variant="clearable">React</Badge> */}

                    {currentFilters.map(filter => (
                        <Badge 
                            key={filter}
                            variant="clearable"
                            onClear={() => dispatch(removeFilter(filter))}
                        >
                            {filter}
                        </Badge>
                    ))}
                </Stack>
                <button 
                    className='link'
                    onClick={() => dispatch(clearFilter)} //clearFilter объект с конкретныь типом события
                >Clear</button>
            </div>
        </Card>
    )
};
