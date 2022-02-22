import React, {Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/Searchbox'
import ErrorBoundry from '../components/ErrorBoundry';
import Scroll from '../components/Scroll'

import "../styles/App.css"

/*

because this comes from a file that is 
not exporting by default... need to destructure:  { }
 robots.js is "export const robots"; there could be another object to export

 */

//  import {robots} from './robots'

class App extends Component {

    // "smart" components have state. Usually will use class syntax
    // classes will usually be used for "smart" components 

    //error boundaries (lesson 94)

    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users=> this.setState({robots:users}))   
    }

    onSearchUpdate = (event ) =>  {
        this.setState({searchField: event.target.value})
    }

    render() {
        // destructuring:
        const { robots, searchField} = this.state;
        const filteredRobots = robots.filter( robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
       return !robots.length ? 
             <h1>loading...</h1> : 
          (
            <div  >
                <h1 className="tc">Robo G'Funk!</h1>
                <SearchBox searchChange = {this.onSearchUpdate}></SearchBox> 
                <Scroll>
                    <ErrorBoundry>
                        {/* CardList is a child to ErrorBoundry */}
                        <CardList robots = {filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        )
        
    }
}

    


/*   {/* <Card className="allCards" id = {robots[0].id} name= {robots[0].name} email= {robots[0].email} />

<Card id = {robots[1].id} name= {robots[1].name} email= {robots[1].email} />

<Card id = {robots[2].id} name= {robots[2].name} email= {robots[2].email} /> }

*/


export default App

