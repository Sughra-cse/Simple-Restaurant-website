import React,{Component} from "react";
import homepage from "./Images/homepage.jpg";
import Indianstyle from "./Images/Indianstyle.jpg";
import japanesestyle from "./Images/japanesestyle.jpg";

class Home extends Component{
    render(){
        return(
            <div>
                <img src={homepage} width="100%" height="5%" alt="house"/>
                <center>
                <img src={Indianstyle} width="60%"  alt="Indianstyle"/>
                <figcaption>IndianStyleFood</figcaption>
                <img src={japanesestyle} width="60%"  alt="japanesestyle"/>
                <figcaption>JapaneseStyleFood</figcaption> </center>           
            </div>    
        );
    }
}
export default Home;