import batterySaga from './battery/battery.sagas';

export default function* rootSaga() {
  yield [
    batterySaga(),
  ];
}
