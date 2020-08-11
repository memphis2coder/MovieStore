import React from 'react';
import './App.css';
import Navigation from './components/navbar/Navigation';
import Cards from './components/cards/Cards';
import Api from './Api';

const apiKey = process.env.REACT_APP_API_KEY

function App() {
  return (
    <div className="App">
        <Navigation />
          <div className="container">
            <Api />
            <Cards />
          </div>
    </div>
    
  );
}

export default App;
