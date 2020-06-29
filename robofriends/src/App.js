import React, {Fragment, Component} from "react";
import CardList from "./Cardlist";
import { robots } from "./robots";
import SearchBox from "./Searchbox";

const state = {
    robots: robots,
    searchfield: ""
}

class App extends Component {
    render(){
        return(
        <Fragment>
            <h1>Welcome to Robot friends</h1>
            <SearchBox/>
            <CardList robots={robots}/>
        </Fragment>
        )
    }
}

export default App;