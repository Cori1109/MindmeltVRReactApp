import { createSelector } from 'reselect';
import { initialState } from './reducer';

import { SELF } from 'constants/keys';

/**
 * Direct selector to the language domain
 */

const selectSelfData = state => state[SELF] || initialState;

/**
 * Select the language locale
 */

const selectSelfDataList = () =>
    createSelector( selectSelfData, newsState => newsState.datas );
const selectIsLoading = () => 
    createSelector( selectSelfData, newsState => newsState.isLoading );

export {
    selectSelfDataList,
    selectIsLoading,
};