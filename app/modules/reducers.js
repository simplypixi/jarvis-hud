import { combineReducers } from 'redux-immutable';

import { reducer as routerReducer } from './router/router.redux';
import { reducer as localesReducer } from './locales/locales.redux';
import { reducer as batteryReducer } from './battery/battery.redux';

export default function createReducer() {
  return combineReducers({
    route: routerReducer,
    locales: localesReducer,
    battery: batteryReducer,
  });
}
