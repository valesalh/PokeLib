import React from "react";

const SearchBox = ({searchChange}) => {
    return (
        <div className='pa2'>
            <input 
            className='pa3 ba b--white'
            type="search"
            placeholder="Search Pokemon..."
            onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;