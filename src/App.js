import React, { Component } from 'react';

import './App.css';

import Header from './components/Header';
import Main from './pages/main';

const App = () => (
  <div className="App">
    <div className="App-header">
      <Header />
      <Main />
    </div>
  </div>
);

export default App;
