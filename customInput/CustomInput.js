import React,{ Component } from "react";

class CustomInput extends Component{
    constructor(props){
        super(props);
        this.state={ 
        };
    }
    render(){
        return(
        <div>
        <label  htmlFor={this.props.label}> </label>
        <input 
         className="textInput"
         value={this.props.value} 
         name={this.props.name}
         onChange={this.props.onChange}
         type="input"
         required/>
        </div>
        );
    }
}

export default CustomInput