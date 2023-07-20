import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    SUCCESS,
    FAILURE,
    RESET
} from "../arsVariables";
import {initialState} from "../initialState";

const login_reducer = (state = initialState, action) => {
    const {type, role, decodedData} = action;

    switch (type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                login: SUCCESS,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                login: FAILURE
            };
        case RESET:
            return {
                ...state, role, decodedData,
                login: null
            };
        default:
            return state;
    }
};

export default login_reducer;