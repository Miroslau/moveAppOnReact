import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './Move.css'
import MoveList from '../MoveList/MoveList'
import {changeParams, fetchMoves} from '../../redux/actions'
import Loader from '../Loader/Loader'
import SearchMove from '../SearchMove/SearchMove'
import Pagination from '../Pagination/Pagination'
import TypeMoveItem from '../TypeMoveItem/TypeMoveItem'

const Move = () => {
    const dispatch = useDispatch()
    const params = useSelector(state => state.params.params)
    const allMoves = useSelector(state => state.moves.fetchedMoves)
    const loading = useSelector(state => state.app.loading)

    const findMove = (title) => {
        params.name = title
        dispatch(changeParams(params))
        dispatch(fetchMoves(params))
    }

    useEffect(() => {
        dispatch(fetchMoves(params))
    }, [dispatch, params])
    if (loading) {
        return <Loader className='loader'/>
    }
    const {Search, totalResults} = allMoves
    const movesAll = Search

    const typesMoves = [
        {
            id: 1,
            type: 'movie'
        },
        {
            id: 2,
            type: 'series'
        },
        {
            id: 3,
            type: 'episode'
        }
    ]

    const choseType = (move) => {
        const {type} = move
        params.type = type
        dispatch(changeParams(params))
        dispatch(fetchMoves(params))
    }

    return (
        <div className="move">
            <div className='search'>
                <SearchMove onFind={findMove} name={params.name}/>
            </div>
            <div className='results'>
                {
                    totalResults ? <span>You searched for: {totalResults}</span> : null
                }
            </div>
            <div className='move-filter move-list'>
                <TypeMoveItem clickItem={choseType} typesMoves={typesMoves}/>
            </div>
            <div className="move-list">
                {
                    movesAll ? <MoveList allMoves={movesAll}/> : <div>You don't have moves</div>
                }
            </div>
            <div className='pagination'>
                {
                    totalResults ? <Pagination page={params.page}
                                               openPage={(page) => {
                                                   params.page = page
                                                   dispatch(changeParams(params))
                                                   dispatch(fetchMoves(params))
                                                }
                                               }
                                               totalResults={totalResults}/> : null
                }
            </div>
        </div>
    );
}

export default Move