import { takeLatest } from 'redux-saga';
import { fork } from 'redux-saga/effects';
import {loadUser} from './loadUser';
import {loadDashboard, loadFlightSaga, loadForecastSaga} from './loadDashboard';


function* rootSaga() {
  yield [
    fork(loadUser),
    takeLatest('FETCH_USER_SUCCESS', loadDashboard),
    fork(loadFlightSaga),
    fork(loadForecastSaga)
  ];
}

export default rootSaga;
