import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import Header from './Components/Header.js'
import Home from './Components/Home.js'
import Work from './Components/Work.js'
import About from './Components/About.js'
import Connect from './Components/Connect.js'
import Featured from './Components/Featured.js'

import './Components/Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
function App() {

  
  const [openDrawer,setOpenDrawer] = React.useState(false)
  const [desktopHeader,setDesktopHeader] = React.useState(true)
  const [screenWidth,setScreenWidth] = React.useState(window.innerWidth)
  const toggleDrawer = () => {
    if(openDrawer == true)
    setOpenDrawer(false)
    else
    setOpenDrawer(true)
  }

  React.useEffect(()=>{
    if(screenWidth<1000){
      setOpenDrawer(false)
      setDesktopHeader(false)
    }
    if(screenWidth>994){
      setOpenDrawer(false)
      setDesktopHeader(true)
    }
  },[screenWidth])
  const screenResize =()=>{
    setScreenWidth(window.innerWidth)
  }
  React.useEffect(()=>{
    window.addEventListener('resize',screenResize)
  },[])
  return (
    <Router>
        <div className="App">
        
        <Header toggleDrawer={()=>toggleDrawer()} openDrawer={openDrawer} desktopHeader={desktopHeader}/>
      
        {openDrawer?
        <div className="mobileHeader">
              <div>
              <Link className="nav-link" onClick={()=>toggleDrawer()} style={{textDecoration:'none', zIndex:'999'}} to="/">home</Link>
              <Link className="nav-link" onClick={()=>toggleDrawer()} style={{textDecoration:'none' , zIndex:'999'}} to="/about">about</Link>
              <Link className="nav-link" onClick={()=>toggleDrawer()} style={{textDecoration:'none' , zIndex:'999'}} to="/work">work</Link>
             <Link className="nav-link" onClick={()=>toggleDrawer()} style={{textDecoration:'none' , zIndex:'999'}} to="/connect">Connect</Link>
              </div>
          </div>:""}
        <Switch>
         <Route exact path="/" component={Home}  >
          </Route>
         
          <Route exact path="/work" component={Work}>
           
          </Route>
          <Route exact path="/connect" component={Connect}>
            
          </Route>
          <Route exact path="/about" component={About}>
         
         </Route>
          
        </Switch>
        
        {/* <Home/> */}
        {/* <Work/> */}
        {/* <Connect/> */}
        </div>
    </Router>
  );
}

export default App;
