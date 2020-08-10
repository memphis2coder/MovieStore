import React from 'react';
import './App.css';
import Navigation from './components/navbar/Navigation';
import Search from './components/search/search';

console.log(process.env.REACT_APP_API_KEY)

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
