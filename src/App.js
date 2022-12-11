
import './App.css';

import React, { Component } from 'react'
import Nav from './components/Nav'
import News from './components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {

  render() {
   

    return (
      <div>
        <Router>
        <Nav />
          <Routes>
            <Route exact path ="/" element ={<News key='general' pageSize={6} category='general' country='in'/>}></Route>
            <Route exact path ="/health" element ={<News key='health' pageSize={6} category='health' country='in'/>}></Route>
            <Route exact path ="/business" element ={<News key='business' pageSize={6} category='business' country='in'/>}></Route>
            <Route exact path ="/sports" element ={<News key='sports' pageSize={6} category='sports' country='in'/>}></Route>
            <Route exact path ="/entertainment" element ={<News key='entertainment' pageSize={6} category='entertainment' country='in'/>}></Route>
            <Route exact path ="/general" element ={<News key='genral' pageSize={6} category='general' country='in'/>}></Route>
            <Route exact path ="/technology" element ={<News key='genral' pageSize={6} category='technology' country='in'/>}></Route>

          </Routes>
        </Router>
      </div>
    )
  }
}






// 744b07f1cad1423c8569037be22d6c89

