import React, { Component } from "react";
import { robots } from "./Robots";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from"./Scroll"
import "./App.css"

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }


  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=> response.json())
        .then(users => this.setState({robots:users}))
  }


  onSearchChange = (event) => {
    const searchValue = event.target.value;

    this.setState({ searchfield: searchValue });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });
    if (robots.length === 0){
        return <h1>
            loading
        </h1>
    }
    else{
        return (
        <div className="tc">
            <h1 className="f1 ttu">RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll>
            <CardList robots={filteredRobots} />
            </Scroll>
        </div>
        );
    }
}}

export default App;
