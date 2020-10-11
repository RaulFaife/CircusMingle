import React from 'react';
import Header from './Header';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/chat">
            <h1>I am the chat page</h1>
          </Route>
          <Route path="/">
            <TinderCards />
            <SwipeButtons />
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