import { createSelector } from 'reselect';
import { initialState } from './reducer';

import { USER } from 'constants/keys';

/**
 * Direct selector to the language domain
 */

const selectUser = state => state[USER] || initialState;

/**
 * Select the language locale
 */

const selectUserInfo = () =>
    createSelector( selectUser, userState => userState.user );
const selectIsLoading = () => 
    createSelector( selectUser, userState => userState.isLoading );

export {
    selectUserInfo,
    selectIsLoading,
};