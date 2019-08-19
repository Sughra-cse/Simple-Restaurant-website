import React,{Component} from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import "./Stylesheet/Header.css";

 class Header extends Component{
     render(){
         return(
 <Router >
     <div className="Makeover">
     <div>
     <ul> 
         <li><Link to="/">Home</Link></li>
         <li><Link to="/about">About</Link></li>
         <li><Link to="/contact">Contact</Link></li>
         <li><Link to="/services">Service</Link></li>
         
     </ul> 
   </div>
  <Route exact path={"/"} component={Home}/>
  <Route exact path={"/about"} component={About}/> 
  <Route exact path={"/contact"} component={Contact}/>
  <Route exact path={"/services"} component={Service}/></div>
  </Router>  
         );
     }
 }
 export default Header;