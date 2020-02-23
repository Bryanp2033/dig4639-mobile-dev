import React, { Component } from 'react';
import Card from './components/Card';
// import './App.css';

class App extends Component {
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <p>
        <Card content="This is a card!"></Card>
        </p>
      </header>
    </div>
    );
  }
}

export default App;
