import React, { Component } from 'react';
import Card from './components/Card';
import CardList from './components/CardList';
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
        <CardList></CardList>
    </div>
    );
  }
}

export default App;
