import { all, fork } from 'redux-saga/effects';
import maintainersSaga from './maintainers/maintainers.sagas';
import batterySaga from './battery/battery.sagas';

//<-- IMPORT MODULE SAGA -->

export default function* rootSaga() {
  yield all([
    fork(maintainersSaga),
    fork(batterySaga),
    //<-- INJECT MODULE SAGA -->
  ]);
}
