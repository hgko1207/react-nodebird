import { all, call, fork, takeLatest, put } from 'redux-saga/effects';
import { LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAILURE } from '../reducers/user';

function loginAPI() {}

function* login() {
  try {
    yield call(loginAPI);
    yield put({ type: LOG_IN_SUCCESS }); // put은 dispatch와 동일
  } catch (e) {
    // loginAPI 실패
    console.error(e);
    yield put({ type: LOG_IN_FAILURE });
  }
}

function* watchLogin() {
  yield takeLatest(LOG_IN, login);
}

export default function* userSaga() {
  yield all([fork(watchLogin)]);
}
