import React,{ Component } from "react";
import "./CVForm.css"
import StepOneComponent from "./stepOneComponent/StepOneComponent";
class CVForm extends Component{
    constructor(props){
        super(props);
        this.state={
                firstName:"",
                lastName:"",
                email:"",
                phone:"",
        };
        this.handleChange=this.handleChange.bind(this);
        console.log(this.state.firstName)
    }
    handleChange(e){
        console.log(e)
        let newState={...this.state,[e.target.name]:e.target.value}
        this.setState(newState) 
    }
    
    render(){
        return (
            <div>
           <StepOneComponent/>
           </div>
            );
      }
}
export default CVForm;