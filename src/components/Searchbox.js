import React from 'react';

const SearchBox = ({ searchField, searchChange }) => {
    return (
        <div className="tc">
            <input type="search"
             placeholder="search, yo!"      
            onChange = {searchChange}
            />
                      
        </div>
    )
}

export default SearchBox