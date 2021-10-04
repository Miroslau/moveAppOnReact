import React, {useState} from 'react'
import './SearchMove.css'

const SearchMove = ({onFind, name}) => {
    const [value, setValue] = useState(name)
    const onSubmit = (e) => {
        e.preventDefault()
        if (value.trim()) {
            onFind(value)
        }
    }
    return (
        <div className='search-container'>
            <h1>Move Catalog</h1>
            <form onSubmit={onSubmit}>
                <input type='text' value={value} onChange={event => setValue(event.target.value)}/>
            </form>
            <div className='login'>
                <span>Miroslav Ryabikov</span>
            </div>
        </div>
    );
}

export default SearchMove