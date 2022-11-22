import { call, put, takeLatest } from 'redux-saga/effects';

import {
    getTeamDataSuccess,
    getTeamDataFail
} from "./action";

import {
    GET_TEAM_DATA_REQUEST
} from "./constants";

import request from 'utils/request';
import { BASE_API_URL } from 'constants/api';

function* getNewsRequest() {
    try {
        const config = {
            method: 'get',
            url: `${BASE_API_URL}/users`,
        };
        const response = yield call(request, config);
        yield put(getTeamDataSuccess(response));
    } catch (err) {
        yield put(getTeamDataFail(err));
    }
}

export default function* teamSaga() {
    yield takeLatest(GET_TEAM_DATA_REQUEST, getNewsRequest);
}