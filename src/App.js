import './App.css';

import React, { Component } from 'react'
import NavBar from './component/NavBar';
import NewsComp from './component/NewsComp';

export default class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div className='container my-5' >
          <NewsComp />
        </div>
      </>
    )
  }
}

