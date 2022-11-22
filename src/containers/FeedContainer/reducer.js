import produce from 'immer';

import {
    GET_NEWS_REQUEST,
    GET_NEWS_SUCCESS,
    GET_NEWS_FAIL
} from "./constants";

export const initialState = {
    isLoading: false,
    news: [],
    error: false,
};

const newsReducer = (state = initialState, {type, payload}) =>
    produce(state, draft => {
        switch (type) {
            case GET_NEWS_REQUEST:
                draft.isLoading = true;
                draft.error = false;
                break;
            case GET_NEWS_SUCCESS:
                draft.isLoading = false;
                draft.news = payload.data;

                break;
            case GET_NEWS_FAIL:
                draft.isLoading = false;
                draft.error = payload;
                break;
            default:
                break;
        }
    });

export default newsReducer;