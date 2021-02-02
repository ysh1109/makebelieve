import logo from './logo.svg';
import './App.css';
import Header from './Components/Header.js'
import Home from './Components/Home.js'
import Work from './Components/Work.js'
import About from './Components/About.js'
import Connect from './Components/Connect.js'

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
        <div className="App">
        
        <Header/>
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
