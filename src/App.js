import React, {useState, useEffect} from 'react';
import './App.css';
import Navigation from './components/navbar/Navigation';
import Cards from './components/cards/Cards';
import Api from './Api';
import axios from 'axios'

const apiKey = process.env.REACT_APP_API_KEY

function App() {

  const [post, setPost] = useState=({});

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${post}&page=1&include_adult=false`)
        .then(res => {
            setPost(res.data.results[0])
            console.log(res.data.results)
        })
        .catch(err => {
            console.log(err)
        })
}, [])

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
