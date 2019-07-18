import React, { useState, useEffect } from "react";
import axios from  "axios";
import Date from "./Components/Date.js";
import Img from "./Components/Img.js";
import Explanation from "./Components/Img.js";
import Title from "./Components/Title.js";

import "./App.css";

function App() {
  const [ nasaData, setNasaData ] = useState([])
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=ggS224dDxgZ88GNVpzWvNgvajKhHjjYv811q0TYo')
    .then(res => {
      const dataResults = res.data;
      setNasaData(dataResults);
      console.log(dataResults);
    })
  }, [])

  return (
    <div className="App">
      <p>{ nasaData.date }</p>
      <h2>{ nasaData.title }</h2>
      <div className="ImpPic">
        <img src={ nasaData.url }></img>
      </div>
      <p>{ nasaData.explanation }</p>
    </div>
  );
};

export default App;

