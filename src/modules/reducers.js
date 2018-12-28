import { combineReducers } from 'redux-immutable';
import { reducer as batteryReducer } from './battery/battery.redux';

//<-- IMPORT MODULE REDUCER -->

export default function createReducer() {
  return combineReducers({
    battery: batteryReducer,
    //<-- INJECT MODULE REDUCER -->
  });
}
