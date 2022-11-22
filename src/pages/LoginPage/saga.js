import { call, put, takeLatest } from 'redux-saga/effects';

import {
    loginRequestSuccess,
    loginRequestFail
} from "./action";

import {
    LOGIN_REQUEST
} from "./constants";

import request from 'utils/request';
import { BASE_API_URL } from 'constants/api';

function* loginRequest({payload}) {
    try {
        const config = {
            method: 'post',
            url: `${BASE_API_URL}/auth/login`,
            data: payload
        };
        const response = yield call(request, config);
        yield put(loginRequestSuccess(response));
    } catch (err) {
        yield put(loginRequestFail(err));
    }
}

export default function* userSaga() {
    yield takeLatest(LOGIN_REQUEST, loginRequest);
}