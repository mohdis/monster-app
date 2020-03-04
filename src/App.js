import React , {Component} from 'react';

import './App.css';

import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'

class App extends Component {
 constructor(){
   super()

   this.state = {
     monsters: [],
     searchInput: ''
   };

 }

 handleChange = event => {
  this.setState({searchInput: event.target.value})
 } 
 componentDidMount () {
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(result => result.json())
   .then(users => this.setState({monsters: users}))
 }

  render() {

    const {searchInput, monsters} = this.state
    const filteredMonsters = monsters.filter((monster => {
      return monster.name.toLowerCase().includes(searchInput.toLowerCase())
    }))

    return (<div className = "App">
      <h1>Monster App</h1>
      <SearchBox placeholder = 'search monsters' 
      changeHandler = {this.handleChange}>
        </SearchBox>
      <CardList monsters = {filteredMonsters}> 
      </CardList>
  </div>
  );
  }
}

export default App;
