import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Tab from "./common/tabs"


// 页面
import WeChat from './pages/wechat/root/index'
import AddressList from './pages/addressList/root/index'
import Discovery from './pages/discovery/root/index'
import Me from './pages/me/root/index'


export default class App extends Component {
 
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact render={()=>{
            return <Redirect to="/wechat"/>
          }}/>
          <Route path="/wechat" component={WeChat}/>
          <Route path="/addressList" component={AddressList}/>
          <Route path="/discovery" component={Discovery}/>
          <Route path="/me" component={Me}/>
          



          <Route path="/" component={Tab}/> 
        </div>

      </Router>
    );
  }
}

