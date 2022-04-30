import React,{ Component } from "react";
import "./WorkHistory.css"
import CustomInput from"./customInput/CustomInput"

class WorkHistory extends Component{
    constructor(props){
        super(props);
        this.state={             
                companyName:"",
                postitionTitle:"",
                dateOfWork:"",
                endOfWork:""
        };
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(e){
        console.log(e)
        let newState={...this.state,[e.target.name]:e.target.value}
        this.setState(newState) 
    }
    componentDidMount(){
        console.log("step three complete");
    }
    render(){
        return ( <div className="workContainer"> 
            <h3 className="title">Work Experience</h3>
            <form>
            <label htmlFor="companyName">Name of Company:</label>
            <CustomInput 
             name="companyName"
             label ="Name of Company"  
             onChange= {this.handleChange}
             value= {this.state.companyName}
            />
            <label htmlFor="postitionTitle">Title of Postition:</label>
            <CustomInput 
             name="postitionTitle"
             label ="Title of Postition"  
             onChange= {this.handleChange}
             value= {this.state.postitionTitle}
            />
            <label htmlFor="mainTask">Main Task with Company:</label>
            <textarea>
                 
            </textarea>
            <label htmlFor="dateOfWork">Start Date:</label>
            <br></br>
            <input 
            id="dateOfWork"
            value={this.state.dateOfWork} 
            onChange={this.handleChange} 
            type="date" 
            name="dateOfWork"/>
            <br></br>
            <label htmlFor="endOfWork">End Date:</label>
            <br></br>
            <input 
            id="endOfWork"
            value={this.state.endOfWork} 
            onChange={this.handleChange} 
            type="date" 
            name="endOfWork"/>
            <br></br>
            <button onClick={this.SchoolHistory}className="additem">ADD</button>
            <button onClick={this.SchoolHistory}className="removeitem">REMOVE</button>
            </form>          
            </div>
            );
      }
}
export default WorkHistory;