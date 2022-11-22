import { createSelector } from 'reselect';
import { initialState } from './reducer';

import { TEAM } from 'constants/keys';

/**
 * Direct selector to the language domain
 */

const selectTeamData = state => state[TEAM] || initialState;

/**
 * Select the language locale
 */

const selectTeamDataList = () =>
    createSelector( selectTeamData, newsState => newsState.datas );
const selectIsLoading = () => 
    createSelector( selectTeamData, newsState => newsState.isLoading );

export {
    selectTeamDataList,
    selectIsLoading,
};