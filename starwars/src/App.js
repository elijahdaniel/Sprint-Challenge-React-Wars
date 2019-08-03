import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Character from "./components/character";

const App = () => {
  const [data, setData] = useState([]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(info => {
        setData(info.data.results);
        console.log(info.data.results);
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div className='cardContainer'>
      {Array.from(data).map(char => (
        <Character
          name={char.name}
          height={char.height}
          mass={char.mass}
          hair_color={char.hair_color}
          eye_color={char.eye_color}
          birth_year={char.birth_year}
          gender={char.gender}
        />
      ))}
      </div>
    </div>
  );
};

export default App;
