import React from 'react'
import './MoveList.css'
import MoveItem from '../MoveItem/MoveItem'

const MoveList = ({allMoves}) => {
    return (
        <div className="list">
            {
                allMoves.map((move, index) => {
                    return (
                        <MoveItem move={move} key={index + 1}/>
                    );
                })
            }
        </div>
    );
}

export default MoveList