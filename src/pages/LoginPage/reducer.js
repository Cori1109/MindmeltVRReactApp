import produce from 'immer';
import history from 'utils/history';

import {
    LOGIN_REQUEST,
    LOGIN_REQUEST_SUCCESS,
    LOGIN_REQUEST_FAIL
} from "./constants";

export const initialState = {
    isLoading: false,
    token: "",
    user: {
        vr_app_session: 0,
        user_id: ""
    },
    error: false,
};

const userReducer = (state = initialState, {type, payload}) =>
    produce(state, draft => {
        switch (type) {
            case LOGIN_REQUEST:
                draft.isLoading = true;
                draft.error = false;
                break;
            case LOGIN_REQUEST_SUCCESS:
                draft.isLoading = false;
                draft.user = {
                    vr_app_session: payload.id,
                    user_id: payload.name,
                };
                draft.token = payload.token;
                history.push("/");
                break;
            case LOGIN_REQUEST_FAIL:
                draft.isLoading = false;
                draft.error = payload;
                break;
            default:
                break;
        }
    });

export default userReducer;