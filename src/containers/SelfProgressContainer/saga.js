import { call, put, takeLatest } from 'redux-saga/effects';

import {
    getSelfDataSuccess,
    getSelfDataFail
} from "./action";

import {
    GET_SELF_DATA_REQUEST
} from "./constants";

import request from 'utils/request';
import { BASE_API_URL } from 'constants/api';

function* getNewsRequest(action) {
    try {
        let response=[];
        
        const config_individualData = {
            method: 'get',
            url: `${BASE_API_URL}/users/get_SelfData/pparker`,
            // url: `${BASE_API_URL}/users/get_SelfData/${action.payload.userId}`,
        };
        let tmp1 = yield call(request, config_individualData);
        let tmp3 = tmp1.data;
        response[0] = tmp3[0];


        const config_selfData = {
            method: 'get',
            url: `${BASE_API_URL}/users/get_user/${action.payload.vr_app_session}`,
        };
        let tmp = yield call(request, config_selfData);
        response[1] = tmp.data;

        yield put(getSelfDataSuccess(response));
    } catch (err) {
        yield put(getSelfDataFail(err));
    }
}

export default function* teamSaga() {
    yield takeLatest(GET_SELF_DATA_REQUEST, getNewsRequest);
}
