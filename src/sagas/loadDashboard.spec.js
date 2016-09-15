import expect from 'expect';
import {loadDashboard, getUserFromStore} from './loadDashboard';
import {loadDeparture} from './apiCalls';
import {select, call, put} from 'redux-saga/effects';
import {user, departure} from './testHelpers';


describe('Dashboard saga', () => {

    const saga = loadDashboard();
    let output = '';

    it('should select user from store', () => {
      output = saga.next().value;
      let expected =  select(getUserFromStore);
      expect(output).toEqual(expected);
    });

    it('should call loadDeparture with user', () => {
        output = saga.next(user).value;
        let expected = call(loadDeparture, user);
        expect(output).toEqual(expected);
    });

    it('should put dasboard success', () => {
        output = saga.next(departure).value;
        let expected= put({type: 'FETCH_DASHBOARD_SUCCESS', payload: departure});
        expect(output).toEqual(expected);
    });

    it('should put error', () => {
      const sagaError = loadDashboard();
      sagaError.next();
      output = sagaError.throw().value;
      let expected = put({type: 'FETCH_FAILED'});
      expect(output).toEqual(expected);
    });

});
