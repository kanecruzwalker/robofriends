import React, {Fragment} from "react";

const SearchBox = ({searchfield, searchChange}) => {
    return(
        <Fragment>
            <input 
            type="search" 
            placeholder="search robofriends"
            onChange={searchChange}
             />
        </Fragment>
    );
}

export default SearchBox;