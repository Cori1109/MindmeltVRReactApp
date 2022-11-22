import {
    GET_NEWS_REQUEST,
    GET_NEWS_SUCCESS,
    GET_NEWS_FAIL
} from "./constants";

export const getNewsRequest = (payload) => ({
    type: GET_NEWS_REQUEST,
    payload,
});

export const getNewsSuccess = (payload) => ({
    type: GET_NEWS_SUCCESS,
    payload
});

export const getNewsFail = (error) => ({
    type: GET_NEWS_FAIL,
    error
})