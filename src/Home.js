import React,{Component} from "react";
import lighthouse from "./Images/lighthouse.jpg";


class Home extends Component{
    render(){
        return(
            <div>
                <img src={lighthouse} width="80%" height="5%" alt="house"/>
            </div>    
        );
    }
}
export default Home;