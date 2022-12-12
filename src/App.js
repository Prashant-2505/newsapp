
import './App.css';

import React, { Component } from 'react'
import Nav from './components/Nav'
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
pageSize = 6;
apikey = process.env.REACT_APP_NEWS_API


state = {
  progress :10
}

setProgress = (progress) =>
{
  this.setState({progress:progress} )
}

  render() {
   

    return (
      <div>
        <Router>
        <Nav />
        <LoadingBar
        color='white'
        height={3}
        progress={this.state.progress} 
      />
          <Routes>
            <Route exact path ="/" element ={<News setProgress={this.setProgress} apikey={this.apikey} key='general' pageSize={this.pageSize} category='general' country='in' />}></Route>
            <Route exact path ="/health" element ={<News setProgress={this.setProgress} apikey={this.apikey} key='health' pageSize={this.pageSize} category='health' country='in'/>}></Route>
            <Route exact path ="/business" element ={<News setProgress={this.setProgress} apikey={this.apikey} key='business' pageSize={this.pageSize} category='business' country='in'/>}></Route>
            <Route exact path ="/sports" element ={<News setProgress={this.setProgress} apikey={this.apikey} key='sports' pageSize={this.pageSize} category='sports' country='in'/>}></Route>
            <Route exact path ="/entertainment" element ={<News setProgress={this.setProgress} apikey={this.apikey} key='entertainment' pageSize={this.pageSize} category='entertainment' country='in'/>}></Route>
            <Route exact path ="/general" element ={<News setProgress={this.setProgress} apikey={this.apikey} key='genral' pageSize={this.pageSize} category='general' country='in'/>}></Route>
            <Route exact path ="/technology" element ={<News setProgress={this.setProgress} apikey={this.apikey} key='genral' pageSize={this.pageSize} category='technology' country='in'/>}></Route>

          </Routes>
        </Router>
      </div>
    )
  }
}






// this.apikey

