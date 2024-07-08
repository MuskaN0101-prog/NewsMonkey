
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class FileName extends Component {

  pageSize=15;

  state={
    progress:0
  }

  setProgress =(progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
    <div>
      <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        
      />
        <Routes>
            <Route exact path="/" element={<News setProgress ={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general" />} />
            <Route exact path="/business" element={<News setProgress ={this.setProgress} key="busines" pageSize={this.pageSize} country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress ={this.setProgress} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />} />
            <Route exact path="/general" element={<News setProgress ={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general" />} />
            <Route exact path="/health" element={<News setProgress ={this.setProgress} key="health" pageSize={this.pageSize} country="in" category="health" />} />
            <Route exact path="/science" element={<News setProgress ={this.setProgress} key="science" pageSize={this.pageSize} country="in" category="science" />} />
            <Route exact path="/sports" element={<News setProgress ={this.setProgress} key="sports" pageSize={this.pageSize} country="in" category="sports" />} />
            <Route exact path="/technology" element={<News setProgress ={this.setProgress} key="technology" pageSize={this.pageSize} country="in" category="technology" />} />
          </Routes>
      </Router>
    </div>
    )
  }
}    

/*   <Route exacts>
          <Route exact path ="/"><News setProgress ={this.setProgress} key="" pageSize={this.pageSize} country="in" category ="general"/></Route>
          <Route exact path ="/business"><News setProgress ={this.setProgress} key="" pageSize={this.pageSize} country="in" category ="business"/></Route>
          <Route exact path ="/entertainment"><News setProgress ={this.setProgress} key="" pageSize={this.pageSize} country="in" category ="entertainmen"/>}</Route>
          <Route exact path ="/general"><News setProgress ={this.setProgress} key="" pageSize={this.pageSize} country="in" category ="general"/></Route>
          <Route exact path ="/health"><News setProgress ={this.setProgress} key="" pageSize={this.pageSize} country="in" category ="health"/></Route>
          <Route exact path ="/science"><News setProgress ={this.setProgress} key="" pageSize={this.pageSize} country="in" category ="science"/></Route>
          <Route exact path ="/sports"><News setProgress ={this.setProgress} key="" pageSize={this.pageSize} country="in" category ="sports"/></Route>
          <Route exact path ="/technology"><News setProgress ={this.setProgress} key="" pageSize={this.pageSize} country="in" category ="technology"/></Route>
          </Routes>*/
          

// key ="" jo hm use krhe hai hm issliye use krhe hai ki hm click kree hmre jese sports pr toh sports news aajye
// without loading anything like that           
//ab meene na pageSize ko intialize kiya hai upr pageSize = 15 
// iska mtlb hai ki bhai like m chhte hu ki mere ek page pr 15 articles aaye 
// and fir aakr mene na route k anhr pageSize ko call krdiya  