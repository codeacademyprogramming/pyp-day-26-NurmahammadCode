import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import HomePage from './components/HomePage';
import SingleRoom from './components/SingleRoom';

function App() {
  return (
    <div className="App">
        <Switch>  
          <Route exact path="/" component={HomePage}/>
          <Route path="/room/:id" component={SingleRoom}/>
        </Switch>
    </div>
  );
}

export default App;
