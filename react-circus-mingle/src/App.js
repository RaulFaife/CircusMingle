import React from 'react';
import Header from './Header';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import TinderCards from './TinderCards';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/chat">
            <h1>I am the chat page</h1>
          </Route>
          <Route path="/">
            <TinderCards />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;

{/* Tinder Cards */}
        {/* Buttons below Tinder Cards */}

        {/* Chats screen */}
        {/* Individual chat screen */}

        {/* Profile */}