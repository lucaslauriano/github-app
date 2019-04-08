import React, { Component } from 'react';
import Routes from './routes';

import './App.css';

import Header from './components/Header';
import Main from './pages/main';

const App = () => (
  <div className="App">
    <div className="App-header">
      <Header />
      <Routes />
    </div>
  </div>
);

export default App;
