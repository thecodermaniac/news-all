import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import React, { Component } from 'react'
import NavBar from './component/NavBar';
import NewsComp from './component/NewsComp';

export default class App extends Component {
  apikey=process.env.APP_APIKEY
  render() {
    return (
      <>
        <Router>
          <NavBar />

          <div className='container my-5' >
            <Switch>
              <Route exact path="/">
                <NewsComp key='general' category='general' country='in' apikey={this.apikey}/>
              </Route>
              <Route exact path="/entertainment">
                <NewsComp key='entertainment' category='entertainment' country='in' />
              </Route>
              <Route exact path="/health">
                <NewsComp key='health' category='health' country='in' />
              </Route>
              <Route exact path="/science">
                <NewsComp key='science' category='science' country='in' />
              </Route>
              <Route exact path="/sports">
                <NewsComp key='sports' category='sports' country='in' />
              </Route>
              <Route exact path="/technology">
                <NewsComp key='technology' category='technology' country='in' />
              </Route>

            </Switch>
          </div>
        </Router>
      </>
    )
  }
}

