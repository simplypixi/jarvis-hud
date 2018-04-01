import { all, fork } from 'redux-saga/effects';
import batterySaga from './battery/battery.sagas';

//<-- IMPORT MODULE SAGA -->

export default function* rootSaga() {
  yield all([
    fork(batterySaga),
    //<-- INJECT MODULE SAGA -->
  ]);
}
