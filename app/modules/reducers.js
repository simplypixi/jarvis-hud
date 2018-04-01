import { combineReducers } from 'redux-immutable';

import { reducer as routerReducer } from './router/router.redux';
import { reducer as batteryReducer } from './battery/battery.redux';

//<-- IMPORT MODULE REDUCER -->

export default function createReducer() {
  return combineReducers({
    route: routerReducer,
    battery: batteryReducer,
    //<-- INJECT MODULE REDUCER -->
  });
}
