import produce from 'immer';

import {
    GET_SELF_DATA_REQUEST,
    GET_SELF_DATA_SUCCESS,
    GET_SELF_DATA_FAIL
} from "./constants";

export const initialState = {
    isLoading: false,
    datas: [],
    error: false,
};

const newsReducer = (state = initialState, {type, payload}) =>
    produce(state, draft => {
        switch (type) {
            case GET_SELF_DATA_REQUEST:
                draft.isLoading = true;
                draft.datas = [];
                draft.error = false;
                break;
            case GET_SELF_DATA_SUCCESS:
                draft.isLoading = false;
                draft.datas = payload;
                break;
            case GET_SELF_DATA_FAIL:
                draft.isLoading = false;
                draft.error = payload;
                break;
            default:
                break;
        }
    });

export default newsReducer;