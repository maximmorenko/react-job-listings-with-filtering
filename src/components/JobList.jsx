import data from '../mock/data.json';
// достаем данные из мока
import { JobPosition } from './JobPosition';
// джоб лист связан с джобпозишн

const JobList = () => {
  return (
    <div className='job-list'>
      {data.map(item => (
        <JobPosition key={item.id} {...item} />
      ))}
    </div>
  )
}

export {JobList};