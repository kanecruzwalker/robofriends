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
            robots: []
        }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=> response.json())
        .then(users=>this.setState({robots: users}))
    }
        
    render(){   
        const {robots } = this.state;     
        const { searchField, onSearchChange } = this.props
        const fileterRoboFriends = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return robots.length === 0 ? <h1>Loading</h1> :
        (
        <Fragment>
            <h1>Welcome to Robot friends</h1>
            <SearchBox searchChange={onSearchChange}/>
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