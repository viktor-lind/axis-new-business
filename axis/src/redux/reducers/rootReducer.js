import { combineReducers } from 'redux'

import { accessReducer } from './access';
import { sitesReducer } from './sites';
import { devicesReducer } from './devices';

export const rootReducer = combineReducers({
    access: accessReducer,
    sites: sitesReducer,
    devices: devicesReducer,
});
