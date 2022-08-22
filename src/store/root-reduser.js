import {combineReducers} from 'redux'

import { positionsReduser } from './positions/position-reduser';
import { filterReduser } from './filters/filter-reduser';

export const rootReduser = combineReducers({
    positions: positionsReduser,
    filters: filterReduser,
}); 