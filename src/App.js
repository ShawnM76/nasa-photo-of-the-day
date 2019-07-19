import React, { useState, useEffect } from "react";
import axios from  "axios";
import ImgData from "./Components/ImgData.js";
import Date from "./Components/Date.js";
import Explanation from "./Components/Explanation";
import TitleOfImg from "./Components/TitleOfImg.js";



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
    .catch(error => {
      console.log("erver is down! Sorry :(", error);
    })
  }, [])

  return (
    <div className="App">
      <Date date={ nasaData.date} />
      <div className="ImpPic">
        <TitleOfImg title={nasaData.title} />
        {/* <img src={ nasaData.url }></img> */}
        <ImgData pics={nasaData.url}/>
      </div>
      <Explanation explanation={nasaData.explanation} />
    </div>
  );
};

export default App;

