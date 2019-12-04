import { combineReducers } from 'redux'

import { accessReducer } from './access';

export const rootReducer = combineReducers({
    access: accessReducer,
});
