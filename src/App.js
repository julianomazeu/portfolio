import React, { Component } from 'react';
import './styles.css';

import Header from './components/header';
import Home from './pages/home';
// import About from './pages/about';

const App = () => (
    <div className="App">
      <Header/>
      <Home/>
      {/* <About/> */}
    </div>
)    

export default App;
