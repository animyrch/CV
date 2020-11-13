import { ACTION_TYPES } from '../actionTypes';
import { INITIAL_STATE } from '../initialState';

const navigationReducer = (state = INITIAL_STATE.navigation, action) => {
    switch (action.type) {
        case ACTION_TYPES.UPDATE_PAGE:
            const newState = {...state};
            newState.currentPage = action.currentPage;
            return newState;
        default:
            return state;
    }
}

export default navigationReducer;
