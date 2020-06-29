import React, {Fragment, Component} from "react";
import CardList from "./Cardlist";
import { robots } from "./robots";
import SearchBox from "./Searchbox";


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ""
        }
    }


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