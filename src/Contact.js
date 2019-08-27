import React,{Component} from "react";
import "./Stylesheet/Contact.css"
import interior1 from "./Images/interior1.jpg";
import interior2 from "./Images/interior2.jpg";

class Contact extends Component{
    constructor (props){
        super(props);
        this.state={name:"Your Name",email:"Your Email",
        phone:"Your phone number",number:"2",
        date:"12-09-2019",time:"02:00PM",
    message:"Hey do write your comment"}
    }
    handlechangeall =(event)=>{
this.setState({[event.target.name]:event.target.value})
    }
    onSubmit=()=>{
        this.props.history.push("/")
    }
    render(){
        return(
            <div id="Contactcontainer">
                <h1>Contact-Us</h1> 
                <h2>contact for table booking</h2>
                <img src={interior1} width="50%" height="5%" alt="house"/><br></br>
                <figcaption >Family Dining Tables</figcaption> 
                <img src={interior2} width="50%" height="5%" alt="house"/>
                <figcaption >Outdoor Tables</figcaption><br></br>
               <form >
                   <h1>Book a table</h1>
                   <p>Make a table booking request for FoodPalace.</p>
                   <input name="name" type="text" value={this.state.name} onChange={this.handlechangeall}/><br></br><br></br>
                   <input name="email" type="email" value={this.state.email} onChange={this.handlechangeall}/><br></br><br></br>
                   <input name="phone" type="tel" value={this.state.phone} onChange={this.handlechangeall}/><br></br><br></br>
                   <label>Number of guest:</label><br></br>
                   <input name="number" type="number" value={this.state.number} onChange={this.handlechangeall}/><br></br><br></br>
                   Date:<input name="date" type="date" value={this.state.date} onChange={this.handlechangeall}/><br></br><br></br>
                   Time:<input name="time" type="time" value={this.state.time} onChange={this.handlechangeall}/><br></br><br></br>
                   <textarea rows="6"name="message" value={this.state.message} onChange={this.handlechangeall} /><br></br><br></br>
                 <button onClick={this.onSubmit}>BOOKTABLE</button> 
                   
               </form>
            </div>    
        );
    }
}
export default Contact;