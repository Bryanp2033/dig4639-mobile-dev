import React from 'react';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Remove from './components/Contact/Remove';
import Add from './components/Contact/Add';
import './App.css';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (


    <div>
      <Navbar/>
        <Switch>
        <Route path ='/contacts/remove' component={Remove}/>
            <Route path='/contacts/add' component={Add}/>
            <Route path ='/contacts' component={Contact} />
            <Route path='/profile' component={Profile}/>
            <Route path='/' component={Home}/>
        </Switch>
    </div>
  )

}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)

export default App;
