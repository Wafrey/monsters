import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component'
import './App.css';

class App extends Component{

  constructor(){
    super();
    this.state={
     monsters: [],
     searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(users=> this.setState({monsters: users}));
  }

  changeText = () =>{
    this.setState({string: 'Hello goshko'})
  }

  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters= monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return(
      <div className='App'>
        <SearchBox
          placeholder='search for monsters'
          handleChange={e => this.setState({searchField: e.target.value})}
        />
        <CardList 
        monsters={filteredMonsters}          
        />   
      </div>
    )
  }
}

export default App;