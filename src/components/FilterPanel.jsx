// импортируем UI компоненты
import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';

import { connect } from 'react-redux';

import { removeFilter, clearFilter } from 'store/filters/filter-actions';

const _FilterPanel = ({currentFilters, removeFilter, clearFilter}) => {
    
    if (currentFilters.length === 0) {
        return null;
    }

    return (
        <Card className="filter-panel">
            <div className="filter-panel-wrapper">
                <Stack>
                    {currentFilters.map(filter => (
                        <Badge 
                            key={filter}
                            variant="clearable"
                            onClear={() => removeFilter(filter)}
                        >
                            {filter}
                        </Badge>
                    ))}
                </Stack>
                <button 
                    className='link'
                    onClick={clearFilter} //clearFilter объект с конкретныь типом события
                >Clear</button>
            </div>
        </Card>
    )
};

const mapStateToProps = (state) => ({
    currentFilters: state.filters,
})

const mapDispatchToProps = {
    removeFilter,
    clearFilter,
};

export const FilterPanel = connect(
    mapStateToProps,
    mapDispatchToProps,
)(_FilterPanel)
