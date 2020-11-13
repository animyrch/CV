import { ACTION_TYPES } from '../actionTypes';

export const updatePage = (page) => {
    return {
        type: ACTION_TYPES.UPDATE_PAGE,
        currentPage: page
    };
};