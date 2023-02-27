import React from 'react';

const LimitSelector  = ({displayCountChange}) => {
    return (
        <div className="pb2">
            <select defaultValue="25" onChange={displayCountChange} className='pa2 ba b--white tc'>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="75">75</option>
                <option value="100">100</option>
                <option value="150">150</option>
                <option value="200">200</option>
            </select>
        </div>
    )
}

export default LimitSelector;