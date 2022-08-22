// перенесем данные из моко, воспользуемся useEffect and useDespatch
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { FilterPanel } from 'components/FilterPanel';
import { JobList } from 'components/JobList';
import { TheHeader } from 'components/TheHeader';

import { addPositions } from 'store/positions/position-actions';

import data from './mock/data.json' 

function App() {

    // обычно юзЭффект используем для получекния данных путем асинхронного запроса, 
    // мы будем получать данные из уже имеющегося json файла
    // для єтого воспользуемся диспачем
    const dispath = useDispatch();

    useEffect(() => {
        // приложение смонтировалось, выполняем диспач, в нем выполняем редюсер (добавить позиции) и передаем в него данные data
        dispath(addPositions(data)) // теперь в редакс-приложении есть данные
        // эти данные нам нужны в компоненте jobList
    })

    return (
        <>
            <TheHeader />
            <div className='container'>
                <FilterPanel />
                <JobList />
            </div>
        </>
    );
}

export default App;
