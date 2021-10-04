import React from 'react';
import Cities from './components/Cities';
import Time from './components/Time';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './App.css'
function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route path="/" exact component={Cities}/>
      <Route path="/:continent/:place" component={Time}/>
      </Switch>
    </div>
    </Router>
    
  );
}

export default App;
