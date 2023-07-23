import {call, put, takeLatest} from 'redux-saga/effects';

import {encryptAndStore} from '../../redux-flow/services/localStorageHelper';
import {Alert} from 'react-native';

import {LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_USER} from '../arsVariables';
import {userLogin} from '../api/userLogin';

function* loginUser(request) {
  try {
    const returnedData = yield userLogin(request);
    yield put({
      type: LOGIN_SUCCESS,
      returnedData,
    });
  } catch (err) {
    const {
      error: {errors, responseMessage},
    } = err;

    let errorMessage = '';
    if (err) {
      if (errors) {
        errors.map(error => {
          if (error.message) {
            errorMessage += error.message;
          }
        });
        Alert.alert(errorMessage);
      } else {
        Alert.alert(responseMessage);
      }
      yield put({type: LOGIN_FAILURE, err});
    }
  }
}

export default function* loginUserSaga() {
  yield takeLatest(LOGIN_USER, loginUser);
}
