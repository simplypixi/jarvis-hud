import { call, put, takeLatest } from 'redux-saga/effects';

import { get } from '../api/api.sagas';
import { BatteryTypes, BatteryActions } from './battery.redux';


export function* fetchBattery() {
  try {
    const battery = yield navigator.getBattery();

    yield put(BatteryActions.fetchSuccess(battery.level));
  } catch (e) {
    yield put(BatteryActions.fetchError(e));
  }
}

export default function* BatterySaga() {
  yield [
    takeLatest(BatteryTypes.FETCH_BATTERY, fetchBattery),
  ];
}
