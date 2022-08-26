import { connect } from 'react-redux';
import { selectVisiblePositions } from 'store/positions/position-selectors';

import { addFilter } from 'store/filters/filter-actions';

import { JobPosition } from './JobPosition';

const _JobList = ({ positions, addFilter }) => {
    
    const handleAddFilter = (filter) => {
        addFilter(filter);
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

const  mapStateToProps = (state) => ({
    positions: selectVisiblePositions(state, state.filters),
});

const mapDispatchToProps = {
    addFilter,
};

export const JobList = connect(
    mapStateToProps,
    mapDispatchToProps,
)(_JobList);
