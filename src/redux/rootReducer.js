import {combineReducers} from 'redux'
import {movesReducer} from "./movesReducer";
import {appReducer} from "./appReducer";
import {paramsReducer} from "./paramsReducer";

export const rootReducer = combineReducers({
    moves: movesReducer,
    app: appReducer,
    params: paramsReducer
})