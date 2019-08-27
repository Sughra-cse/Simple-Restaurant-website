import React,{Component} from "react";
import Cake from "./Images/Cake.jpg";
import Vegetarian from "./Images/Vegetarian.jpg";
import Juice from "./Images/Juice.jpg";
import Mango from "./Images/Mango.jpg";
import Panipuri from "./Images/Panipuri.jpg";
import Pizza from "./Images/Pizza.jpg";
import "./Stylesheet/Service.css"

class Service extends Component{
    render(){
        return(
            <div>
                <h2>Here we have some different kind of Food items</h2>
                <div className="maincontainer">
                <div>
                <img src={Cake} width="100px" height="100px" onclick="myfuction(this)" alt="cake"/>
                <figcaption>Deserts</figcaption>
                </div>
                <div>
                <img src={Vegetarian} width="100px" height="100px" onclick="myfuction(this)" alt="vegetarian"/>
                <figcaption>Japanese</figcaption>
                </div>
                <div>
                <img src={Juice} width="100px" height="100px" onclick="myfuction(this)" alt="juice"/>
                <figcaption>Milk Shakes</figcaption>
                </div>
                <div>
                <img src={Mango} width="100px" height="100px" onclick="myfuction(this)" alt="mango"/>
                <figcaption>Ice Cream</figcaption>
                </div>
               <div>
               <img src={Panipuri} width="100px" height="100px" onclick="myfuction(this)" alt="panipuri"/>
               <figcaption>chats</figcaption>
               </div>
               <div>
               <img src={Pizza} width="100px" height="100px" onclick="myfuction(this)" alt="pizza"/>
               <figcaption>Pizzas</figcaption>
               </div>
               <img id="imagebox" src={Pizza}/>
            </div> 
            </div>   
        );
    }
}
export default Service;