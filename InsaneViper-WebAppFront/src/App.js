//import logo from './logo.jpg';
import React from "react";
import Navbar from "./components/navbar/navbar.js"
import './App.css';


class App extends React.Component{
  render(){
    return (
      <div class="app">
        <Navbar></Navbar>
      </div>
    )
  }
}

export default App;
