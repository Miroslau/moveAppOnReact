import {FETCH_MOVES} from "./types";

const initialState = {
    moves: [],
    fetchedMoves: []
}

export const movesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVES:
            return {...state, fetchedMoves: action.payload}
        default: return state
    }
}