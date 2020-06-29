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

    onSearchChange = (event) => {
        const userSearch = event.target.value
        this.setState({ searchfield: userSearch})
    }
    
    
    render(){        
        const fileterRoboFriends = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return(
        <Fragment>
            <h1>Welcome to Robot friends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <CardList robots={fileterRoboFriends}/>
        </Fragment>
        )
    }
}

export default App;