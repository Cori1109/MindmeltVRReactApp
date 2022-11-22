import { call, put, takeLatest } from 'redux-saga/effects';

import {
    getNewsSuccess,
    getNewsFail
} from "../FeedContainer/action";

import {
    GET_NEWS_REQUEST
} from "./constants";

import request from 'utils/request';
import { BASE_API_URL } from 'constants/api';

function* getNewsRequest() {
    try {
        const config = {
            method: 'get',
            url: `${BASE_API_URL}/news`,
        };
        const response = yield call(request, config);
        yield put(getNewsSuccess(response));
    } catch (err) {
        yield put(getNewsFail(err));
    }
}

export default function* userSaga() {
    yield takeLatest(GET_NEWS_REQUEST, getNewsRequest);
}