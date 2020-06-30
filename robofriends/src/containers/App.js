import React, {Fragment, Component} from "react";
import { connect } from "react-redux";
import CardList from "../components/Cardlist";
import SearchBox from "../components/Searchbox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import {setSearchField} from "../actions";


const mapStateToProps = state => {
    return{
        searchField: state.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))

    }
}
class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ""
        }
    }

    componentDidMount(){
        console.log(this.props.store);
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=> response.json())
        .then(users=>this.setState({robots: users}))
    }


    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
    }
    
    
    render(){   
        const {robots, searchfield} = this.state;     
        const fileterRoboFriends = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return robots.length === 0 ? <h1>Loading</h1> :
        (
        <Fragment>
            <h1>Welcome to Robot friends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
                <ErrorBoundry>
                    <CardList robots={fileterRoboFriends}/>
                </ErrorBoundry>
            </Scroll>
        </Fragment>
        )
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(App);