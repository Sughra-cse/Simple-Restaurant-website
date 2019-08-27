import React,{Component} from "react";
import Menu from "./Images/Menu.jpg";

class About extends Component{
    render(){
        return(
            <div>
                <h1>Hey welcome you all</h1>
                <h1>select your choice food (MENU)</h1>
                 <img src={Menu} alt="image"/>
                 {/* <img src={} alt="image"/> */}

                <p>Food palace is a simple static website where you can easily 
                    get to know about different varieties of food items of your choice.
                    It is an easy way to get food of your choice.
                </p>
            </div>    
        );
    }
}
export default About;