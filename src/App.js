// import React, { useState, useEffect } from 'react';
import React from 'react';
import './App.css';
import video from "./videos/sculpture.mp4";


function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async() => {
//     const result = await fetch("http://orangevalleycaa.org/api/videos").then(
//       response => response.json()
//     );
//     setData(result);
//   };

//   fetchData();

// }, []);
  return (
    <div className="App">
      <header>
        <h1>
          Sample PWA - React
        </h1>
      </header>
        <div> 
          <h3>
            sample video 1
          </h3>
          <video src={video} controls height={200} />        
          </div>
          
    </div>
  );
}

export default App;
