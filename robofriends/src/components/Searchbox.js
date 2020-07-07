import React, {Fragment} from "react";

const SearchBox = ({searchfield, searchChange}) => {
    return(
        <Fragment>
            <input 
            className = 'pa3 ba b--green bg-lightest-blue'
            type="search" 
            placeholder="search robofriends"
            onChange={searchChange}
             />
        </Fragment>
    );
}

export default SearchBox;