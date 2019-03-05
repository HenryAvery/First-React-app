import React, { Component } from 'react';
import './App.css';
import CardList from './components/CardList'

class App extends Component {
  constructor() {
    super()
    this.state = {
      planets: [],
      residents: []
    }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/planets/').then(response => {
      return response.json()
    })
    .then(data => {
      this.setState({planets: data.results})
    })
  }


  render() {

    return (
      <div className='tc'>
        <h1>Starwars Planets</h1>
        <CardList planets={this.state.planets}/>
      </div>
    );
  }
}

export default App;
