import {CHANGE_PARAMS, FETCH_MOVES, HIDE_LOADER, SHOW_LOADER} from './types'

export function fetchMoves ({name, page, type}) {
    return async dispatch => {
        dispatch(showLoader())
        const query = `https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s=${name}&page=${page}`
        const request = [query]
        if (type) request.push(`&type=${type}`)
        const response = await fetch(request.join(''))
        const json = await response.json()
        dispatch({type: FETCH_MOVES, payload: json})
        dispatch(hideLoader())
    }
}

export function changeParams (param) {
    return {type: CHANGE_PARAMS, payload: param}
}

export function showLoader () {
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader () {
    return {
        type: HIDE_LOADER
    }
}