// import data from '../mock/data.json';
// достаем данные из мока

// теперь данные достаем не из мока а из нашего созданого селектора с использованием useSelector
import { useSelector } from 'react-redux';
import { selectAllPositions } from 'store/positions/position-selectors';

import { JobPosition } from './JobPosition';
// джоб лист связан с джобпозишн

const JobList = () => {

    const positions = useSelector(selectAllPositions);

    return (
        <div className='job-list'>
            {positions.map(item => (
                <JobPosition key={item.id} {...item} />
            ))}
        </div>
    )
}

export {JobList};