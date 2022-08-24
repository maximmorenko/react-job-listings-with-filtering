// import data from '../mock/data.json';
// достаем данные из мока

// теперь данные достаем не из мока а из нашего созданого селектора с использованием useSelector
import { useSelector, useDispatch } from 'react-redux';
import { selectVisiblePositions } from 'store/positions/position-selectors';
import { selectFilters } from 'store/filters/filter-selectors';

import { addFilter } from 'store/filters/filter-actions';

import { JobPosition } from './JobPosition';
// джоб лист связан с джобпозишн

// чтобы повесить экшн (событие клика) на на конкретный бедж, нужна функция
// сделаем ее на уровне списка и передадим ниже

// на уровне джоб листа нам также нужны актуальные фильтры, досанем их из селектора
const JobList = () => {
    const dispatch = useDispatch();
    const currentFilters = useSelector(selectFilters); // все актуальные фильтры
    // const positions = useSelector(selectAllPositions); // до сих пор мы отрисовывали все позиции, 
    // сделаем так чтобы отрисовывались только отфильтрованые, для этого возьмем наш стейт, 
    // вывзываем селектор актуальных позиций (функцию фильтрации) и передаем в нее актуальный стейт и актуальные фильтры
    // мы должны передать актуальные фильтры, потому что мы не можем создавать селекторы, которые получали бы любое количество параметров, 
    // если больше одного, то вотрой передаем вручную 
    const positions = useSelector((state) => selectVisiblePositions(state, currentFilters));
   
    const handleAddFilter = (filter) => {
        // функция будет вызывать диспечер, диспечер будет вызывать экшн криэйтор, 
        // и в экшн передаем полученый фильтр
        dispatch(addFilter(filter));
    };

    return (
        <div className='job-list'>
            {positions.map(item => (
                <JobPosition 
                    key={item.id} 
                    handleAddFilter={handleAddFilter} 
                    {...item} 
                />
            ))}
        </div>
    )
}

export {JobList};
