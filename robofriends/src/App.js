import React, {Fragment} from "react";
import CardList from "./Cardlist";
import { robots } from "./robots";
import SearchBox from "./Searchbox";

const App = () => {
    return(
        <Fragment>
            <h1>Welcome to Robot friends</h1>
            <SearchBox/>
            <CardList robots={robots}/>
        </Fragment>
    )
}

export default App;