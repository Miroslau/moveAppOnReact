import React from 'react'
import './TypeMoveItem.css'

const TypeMoveItem = ({typesMoves, clickItem}) => {
    return (
        <div className='type-move-item'>
            {
                typesMoves.map(typeMove => {
                    return (
                        <div key={typeMove.id}
                             className='type-move-item__item'
                             onClick={() => clickItem(typeMove)}
                        >
                            {typeMove.type}
                        </div>
                    );
                })
            }
        </div>
    );
}

export default TypeMoveItem