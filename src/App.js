import React from 'react';
import photoInSrc from './photoInSrc.jpg'
import './App.css';
import './Style.css';
import MyButton from "./Button"

function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black",maxWidth:"100vw"}}className="container">
	      <h1 className="title-red">My title</h1>
	      <br/>
        <img src={photoInSrc}  alt="logo" />
        <br/>
        <br/>
	      <img src='photo.jpg'  alt="logo" />
      </div>

    </div>
  );
}

export default App;
