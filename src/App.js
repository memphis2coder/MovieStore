import React from 'react';
import './App.css';
import Navigation from './components/navbar/Navigation';
import Cards from './components/cards/Cards';
import Api from './Api';

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
