import React,{Component} from "react";
import "./Stylesheet/Contact.css"

class Contact extends Component{
    constructor (props){
        super(props);
        this.state={name:"enter your name",email:"enter your email",phone:"enter your phone",
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
            <div className="Contactcontainer">
                <h2>Contact-Us</h2>
               <form >
                   <input name="name" type="text" value={this.state.name} onChange={this.handlechangeall}/><br></br><br></br>
                   <input name="email" type="email" value={this.state.email} onChange={this.handlechangeall}/><br></br><br></br>
                   <input name="phone" type="number" value={this.state.phone} onChange={this.handlechangeall}/><br></br><br></br>
                   <textarea rows="6"name="message" value={this.state.message} onChange={this.handlechangeall} /><br></br><br></br>
                 <button onClick={this.onSubmit}>submit</button> 
                   
               </form>
            </div>    
        );
    }
}
export default Contact;