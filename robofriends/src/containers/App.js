import React, {Fragment, Component} from "react";
import CardList from "../components/Cardlist";
import SearchBox from "../components/Searchbox";
import Scroll from "../components/Scroll";


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ""
        }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=> response.json())
        .then(users=>this.setState({robots: users}))
    }


    onSearchChange = (event) => {
        const userSearch = event.target.value
        this.setState({ searchfield: userSearch})
    }
    
    
    render(){   
        const {robots, searchfield} = this.state;     
        const fileterRoboFriends = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        if (robots.length === 0){
            return <h1>Loading</h1>
        }else{
        return(
        <Fragment>
            <h1>Welcome to Robot friends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
            <CardList robots={fileterRoboFriends}/>
            </Scroll>
        </Fragment>
        )
        }
    }
}

export default App;