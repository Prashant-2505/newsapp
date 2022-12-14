
import './App.css';

import React, { useState } from 'react'
import Nav from './components/Nav'
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



const App = ()=> {
const pageSize = 6;
const [progress, setprogress] = useState(0)

    return (
      <div>
        <Router>
        <Nav />
        <LoadingBar
        color='white'
        height={3}
        progress={progress} 
      />
          <Routes>
            <Route exact path ="/" element ={<News setProgress={setprogress}  key='general' pageSize={pageSize} category='general' country='in' />}></Route>
            <Route exact path ="/health" element ={<News setProgress={setprogress}  key='health' pageSize={pageSize} category='health' country='in'/>}></Route>
            <Route exact path ="/business" element ={<News setProgress={setprogress}  key='business' pageSize={pageSize} category='business' country='in'/>}></Route>
            <Route exact path ="/sports" element ={<News setProgress={setprogress}  key='sports' pageSize={pageSize} category='sports' country='in'/>}></Route>
            <Route exact path ="/entertainment" element ={<News setProgress={setprogress}  key='entertainment' pageSize={pageSize} category='entertainment' country='in'/>}></Route>
            <Route exact path ="/general" element ={<News setProgress={setprogress}  key='genral' pageSize={pageSize} category='general' country='in'/>}></Route>
            <Route exact path ="/technology" element ={<News setProgress={setprogress}  key='genral' pageSize={pageSize} category='technology' country='in'/>}></Route>

          </Routes>
        </Router>
      </div>
    )
  }


export default App;




// this.apikey

