import {
    LOGIN_REQUEST,
    LOGIN_REQUEST_SUCCESS,
    LOGIN_REQUEST_FAIL
} from "./constants";

export const loginRequest = (payload) => ({
    type: LOGIN_REQUEST,
    payload,
});

export const loginRequestSuccess = (payload) => ({
    type: LOGIN_REQUEST_SUCCESS,
    payload
});

export const loginRequestFail = (error) => ({
    type: LOGIN_REQUEST_FAIL,
    error
})