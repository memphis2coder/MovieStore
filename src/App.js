import React, {useState, useEffect} from 'react';
import './App.css';
import Navigation from './components/navbar/Navigation';
import Cards from './components/cards/Cards';
import Api from './Api';
import axios from 'axios'
import Search from './components/search/search';

const apiKey = process.env.REACT_APP_API_KEY

function App() {
  
  return (
    <div className="App">
        <Navigation />
          <div className="container">
            <Search />
          </div>
    </div>
    
  );
}

export default App;
