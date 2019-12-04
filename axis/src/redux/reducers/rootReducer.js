import { combineReducers } from 'redux'

import { accessReducer } from './access';
import { sitesReducer } from './sites';

export const rootReducer = combineReducers({
    access: accessReducer,
    sites: sitesReducer,
});
