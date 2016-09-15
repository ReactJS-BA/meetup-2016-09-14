import {select, call, put, take} from 'redux-saga/effects';
import {loadDeparture, loadFlight, loadForecast} from './apiCalls';
export const  getUserFromStore = state => state.user;

export  function* loadDashboard() {
  try{
    const user = yield select(getUserFromStore);
    const departure = yield call(loadDeparture, user);
    yield put({type: 'FETCH_DASHBOARD_SUCCESS', payload: departure});
    yield put({type: 'FETCH_DASHBOARD_SUCCESS', payload: {departure}});

  } catch(e) {
      yield put({type: 'FETCH_FAILED'});
  }


}

export function* loadFlightSaga() {
    const departure = yield take('FETCH_DASHBOARD_SUCCESS');
    const flight = yield call(loadFlight, departure.payload.flightID);
    yield put({type: 'FETCH_DASHBOARD_SUCCESS' , payload: {flight}});
}

export function* loadForecastSaga() {
  const departure = yield take('FETCH_DASHBOARD_SUCCESS');
  const forecast = yield call(loadForecast, departure.payload.date);
  yield put({type: 'FETCH_DASHBOARD_SUCCESS' , payload: {forecast}});
}
