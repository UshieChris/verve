import {call, put, takeLatest} from 'redux-saga/effects';

import {encryptAndStore} from '../../redux-flow/services/localStorageHelper';

import {LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_USER} from '../arsVariables';

function* loginUser(request) {
  try {
    const returnedData = yield userLogin(request);
    const {
      error,
      status,
      data: {
        payload: {token, refreshToken, role, expires_in, ...rest},
      },
    } = returnedData;
    yield put({
      type: LOGIN_SUCCESS,
      returnedData
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
