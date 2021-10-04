import React from 'react'
import './MoveItem.css'

const MoveItem = ({move}) => {
    return (
        <div className='card'>
            <img className='image'
                 src={move.Poster !== 'N/A' ? move.Poster
                : 'https://upload.wikimedia.org/wikipedia/commons/1/14/Media_Player_Classic_MPC_With_Shadow_No_Numbers.png'}
                 alt='poster'/>
            <div className='description'>
                <ul>
                    <li>Name: {move.Title}</li>
                    <li>Year: {move.Year}</li>
                    <li>imdbID: {move.imdbID}</li>
                    <li>Type: {move.Type}</li>
                </ul>
            </div>
        </div>
    );
}

export default MoveItem