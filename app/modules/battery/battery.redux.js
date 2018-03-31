import { Record, fromJS } from 'immutable';
import { createReducer, createActions } from 'reduxsauce';

export const DEFAULT_LOCALE = 'en';

export const { Types: BatteryTypes, Creators: BatteryActions } = createActions({
  fetchBattery: [],
  fetchSuccess: ['level'],
  fetchError: ['error'],
}, { prefix: 'BATTERY_' });

const BatteryRecord = new Record({
  level: 0,
});

export const INITIAL_STATE = new BatteryRecord({});

export const successHandler = (state = INITIAL_STATE, { level }) => {
  return state.set('level', level);
};

export const errorHandler = (state, { error }) => console.log('ERROR', e);

export const HANDLERS = {
  [BatteryTypes.FETCH_SUCCESS]: successHandler,
  [BatteryTypes.FETCH_ERROR]: errorHandler
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);

