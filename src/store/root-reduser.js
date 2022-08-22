import {combineReducers} from 'redux'

import { positionsReduser } from './positions/position-reduser';

export const rootReduser = combineReducers({
    positions: positionsReduser,
}); // комбинируем все редюсеры