import * as React from 'react';
import './App.css';
import { NavMenu } from "./components";
import { Route } from "react-router";
import { PlayersStatsNav } from "./players-stats-page";

//const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavMenu brand="Sports Porch"/>
        <div>
          <Route path="/playersStats" component={PlayersStatsNav}/>
        </div>
      </div>
      );
    }
  }

export default App;
