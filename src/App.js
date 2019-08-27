import React from 'react';
import Header from "./Header";
import logo from "./logo.jpg";
import "./Stylesheet/Home.css";

function App() {
  return (
    
      <div> 
    <div className="Home">
                <div> <img src={logo} width="100px" height="100px" alt="image"/></div>  
                <div> <h1>Welcome to Food Palace</h1>
                </div>
                </div>
                <Header/>
    </div>
  );
}

export default App;
