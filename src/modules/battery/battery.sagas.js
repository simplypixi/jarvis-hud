import { put, call, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { BatteryActions } from './battery.redux';
import { selectBatteryIsWatching } from './battery.selectors';


export default function* watchBattery() {
  while(true) {
    yield call(delay, 50000);
    const isEnabled = select(selectBatteryIsWatching);
    if (isEnabled) {
      try {
        const battery = yield navigator.getBattery();
        yield put(BatteryActions.fetchSuccess(battery.level));
      } catch (e) {
        yield put(BatteryActions.fetchError(e));
      }
    }
  }
}
