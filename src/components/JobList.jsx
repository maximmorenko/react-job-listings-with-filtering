// import data from '../mock/data.json';
// достаем данные из мока

// теперь данные достаем не из мока а из нашего созданого селектора с использованием useSelector
import { useSelector, useDispatch } from 'react-redux';
import { selectAllPositions } from 'store/positions/position-selectors';

import { addFilter } from 'store/filters/filter-actions';

import { JobPosition } from './JobPosition';
// джоб лист связан с джобпозишн

// чтобы повесить экшн (событие клика) на на конкретный бедж, нужна функция
// сделаем ее на уровне списка и передадим ниже


const JobList = () => {
    const dispatch = useDispatch();
    const positions = useSelector(selectAllPositions);

    const hendleAddFilter = (filter) => {
        // функция будет вызывать диспечер, диспечер будет вызывать экшн криэйтор, 
        // и в экшн передаем полученый фильтр
        dispatch(addFilter(filter));
    };

    return (
        <div className='job-list'>
            {positions.map(item => (
                <JobPosition 
                    key={item.id} 
                    hendleAddFilter={hendleAddFilter} 
                    {...item} 
                />
            ))}
        </div>
    )
}

export {JobList};
