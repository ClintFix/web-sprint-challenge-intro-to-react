import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [ characters, setCharacters ] = useState([]);
  const [ page, setPage ] = useState(1)

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    Axios.get(`http://swapi.dev/api/people/?page=${page}`)
      .then(res => {
        let charsArray = characters;
        charsArray.push(res.data.results)
        setCharacters(charsArray)
         if (res.data.next !== null) {
           setPage(page + 1)
         }
      })
      .catch(err => {
        alert(`Axios error - line 15`)
      })
  },[page])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
