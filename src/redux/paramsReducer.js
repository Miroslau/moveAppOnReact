import {CHANGE_PARAMS} from "./types";

const initialState = {
    params: {
        page: 1,
        name: 'Batman'
    }
}

export const paramsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_PARAMS:
            return {...state, params: action.payload}
        default: return state
    }
}