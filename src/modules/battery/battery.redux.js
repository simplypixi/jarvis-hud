import { Record } from 'immutable';
import { createReducer, createActions } from 'reduxsauce';

export const DEFAULT_LOCALE = 'en';

export const { Types: BatteryTypes, Creators: BatteryActions } = createActions({
  startWatchingBattery: [],
  fetchSuccess: ['level'],
  fetchError: ['error'],
  cancelWatchingBattery: [],
}, { prefix: 'BATTERY_' });

const BatteryRecord = new Record({
  level: 0,
  watching: true,
});

export const INITIAL_STATE = new BatteryRecord({});

export const successHandler = (state = INITIAL_STATE, { level }) => {
  return state.set('level', level);
};

export const errorHandler = (state = INITIAL_STATE, { error }) => console.log('ERROR', error);

export const startWatchingBattery = (state = INITIAL_STATE) => state.set('watching', true);

export const cancelWatchingBattery = (state = INITIAL_STATE) => state.set('watching', false);

export const HANDLERS = {
  [BatteryTypes.FETCH_SUCCESS]: successHandler,
  [BatteryTypes.FETCH_ERROR]: errorHandler,
  [BatteryTypes.CANCEL_WATCHING_BATTERY]: cancelWatchingBattery,
  [BatteryTypes.START_WATCHING_BATTERY]: startWatchingBattery,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);

