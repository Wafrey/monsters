import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends Component{

  constructor(){
    super();
    this.state={
     monsters: []
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
    return(
      
      <div className='App'>
      <CardList monsters={this.state.monsters} />   
      </div>
    )
  }
}

export default App;