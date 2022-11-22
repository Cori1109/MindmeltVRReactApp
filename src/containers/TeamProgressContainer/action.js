import {
    GET_TEAM_DATA_REQUEST,
    GET_TEAM_DATA_SUCCESS,
    GET_TEAM_DATA_FAIL
} from "./constants"

export const getTeamDataRequest = (payload) => ({
    type: GET_TEAM_DATA_REQUEST,
    payload,
});

export const getTeamDataSuccess = (payload) => ({
    type: GET_TEAM_DATA_SUCCESS,
    payload
});

export const getTeamDataFail = (error) => ({
    type: GET_TEAM_DATA_FAIL,
    error
})