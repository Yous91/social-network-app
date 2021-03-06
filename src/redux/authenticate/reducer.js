import {
    FETCH_REQUEST,
    FETCH_SUCCESS,
    FETCH_FAILURE,
} from "./action";

const initialState = {
    loading: false,
    token: "",
    errorMessage: "",
    isRegistred: Cookies.get("token") ? true : false
};

const authenticateReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REQUEST:
            return {
                ...state,
                loading: true,
                    isRegistred: false
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                    token: action.token.jwt,
                    errorMessage: "",
                    isRegistred: true
            };
        case FETCH_FAILURE:
            return {
                ...state,
                loading: false,
                    token: "",
                    errorMessage: action.error,
                    isRegistred: false
            };
        default:
            return state;
    }
};

export default authenticateReducer;