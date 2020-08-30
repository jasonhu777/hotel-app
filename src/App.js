import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'


//pages
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import Singleroom from './pages/Singleroom'
import Error from './pages/Error'


//components
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/rooms/' component={Rooms} />
        <Route exact path='/rooms/:slug' component={Singleroom} />
        <Route exact component={Error} />
      </Switch>
    </div>
  );
}

export default App;

