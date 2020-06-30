import React, {Fragment, Component} from "react";
import { connect } from "react-redux";
import CardList from "../components/Cardlist";
import SearchBox from "../components/Searchbox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import {setSearchField, requestRobots} from "../actions";


const mapStateToProps = state => {
    return{
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}
class App extends Component {
    componentDidMount(){
        this.props.onRequestRobots()
    }
        
    render(){   
        const { searchField, onSearchChange, robots, isPending } = this.props
        const fileterRoboFriends = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return isPending === 0 ? <h1>Loading</h1> :
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