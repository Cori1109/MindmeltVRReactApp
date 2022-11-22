import { createSelector } from 'reselect';
import { initialState } from './reducer';

import { NEWS } from 'constants/keys';

/**
 * Direct selector to the language domain
 */

const selectNews = state => state[NEWS] || initialState;

/**
 * Select the language locale
 */

const selectNewsList = () =>
    createSelector( selectNews, newsState => newsState.news );
const selectIsLoading = () => 
    createSelector( selectNews, newsState => newsState.isLoading );

export {
    selectNewsList,
    selectIsLoading,
};