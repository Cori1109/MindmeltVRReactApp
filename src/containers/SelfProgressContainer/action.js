import {
    GET_SELF_DATA_REQUEST,
    GET_SELF_DATA_SUCCESS,
    GET_SELF_DATA_FAIL
} from "./constants"

export const getSelfDataRequest = (payload) => ({
    type: GET_SELF_DATA_REQUEST,
    payload,
});

export const getSelfDataSuccess = (payload) => ({
    type: GET_SELF_DATA_SUCCESS,
    payload
});

export const getSelfDataFail = (error) => ({
    type: GET_SELF_DATA_FAIL,
    error
})