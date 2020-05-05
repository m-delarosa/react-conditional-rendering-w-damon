import React, { Component } from 'react'
import './App.css'
import RapperList from './components/RapperList'

class App extends Component {

  state = {
    rappers: [
      {
        name: "Nas",
        rating: 10,
        best_album: "Illmatic"
      },
      {
        name: "Lil Wayne",
        rating: 10,
        best_album: "Carter II"
      },
      {
        name: "Yung Gravy",
        rating: 1,
        best_album: null
      },
      {
        name: "Lil Yachty",
        rating: 0,
        best_album: null
      }
    ]
  }

  render() {
    return (
      <div className="App" >
        <h1>Rap App</h1>
        <RapperList rappers={this.state.rappers} />
        // If we wanted to conditionally render a component:
        {this.state.rappers.length < 5 ? "NOT ENOUGH DATA" : <RapperList rappers={this.state.rappers} />}
      </div>
    )
  }
}

export default App
