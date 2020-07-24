import React from 'react';

import Navbar from './components/Navbar';
import Pizza from './components/Pizza';
import Burger from './components/Burger';

import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Route path='/Pizza'>
          <Pizza />
        </Route>
        <Route path='/Burger'>
          <Burger />
        </Route>
      
      </BrowserRouter>
      </div>
  );
}

export default App;