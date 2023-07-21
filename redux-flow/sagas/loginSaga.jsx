import {call, put, takeLatest} from 'redux-saga/effects';

import {encryptAndStore} from '../../redux-flow/services/localStorageHelper';

import {LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_USER} from '../arsVariables';
import {userLogin} from '../api/userLogin';

function* loginUser(request) {
  try {
    console.log('Hectic check', request);
    const returnedData = yield userLogin(request);
    const {
      errors,
      responseCode,
    } = returnedData;
    if (errors == null && responseCode == '00') {
      console.log('Another Important check', returnedData);
    }
    yield put({
      type: LOGIN_SUCCESS,
      returnedData,
    });
  } catch ({response}) {
    if (response) {
      yield put({type: LOGIN_FAILURE, response});
    }
  }
}

export default function* loginUserSaga() {
  yield takeLatest(LOGIN_USER, loginUser);
}
