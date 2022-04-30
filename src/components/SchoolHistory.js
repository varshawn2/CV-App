import React,{ Component } from "react";
import "./SchoolHistory.css"
class SchoolHistory extends Component{
    constructor(props){
        super(props);
        this.state={
                schoolName:"",
                titleOfStudy:"",
                dateOfStudy:"",
                grad:"",
        };
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(e){
        console.log(e)
        let newState={...this.state,[e.target.name]:e.target.value}
        this.setState(newState) 
    }
    componentDidMount(){
      console.log("step two complete")
  }
    render(){
        return ( <div className="schoolContainer"> 
            <h3 className="title">Education</h3>
            <form>
            <label htmlFor="schoolName">School of Name:</label>
            <input
              id="schoolName"
              value={this.state.schoolName}
              onChange={this.handleChange} 
              type="input" 
              name="schoolName"/>
          <label for="eddy">What Education title did you :</label>
                <select id="eddy">
                  <option value="Null"></option>
                  <option value="HS">High School Diploma</option>
                  <option value="two">Associate</option>
                  <option value="four">Bachelor's</option>
                  <option value="five">Master's</option>
                  <option value="six">Doctorate</option>
                </select>
            <label htmlFor="titleOfStudy"> 
            <br></br>Title of Study:</label>
            <input 
              id="titleOfStudy"
              value={this.state.titleOfStudy} 
              onChange={this.handleChange} 
              type="input" 
              name="titleOfStudy"/>
            <label htmlFor="dateOfStudy">Date of Study:</label>
            <input 
              id="dateOfStudy"
              value={this.state.dateOfStudy} 
              onChange={this.handleChange} 
              type="date" 
              name="dateOfStudy"
            />
            <div>
              <label htmlFor="grad"> Graduation:</label>
              <br></br>
              <input
                id="grad" 
                value={this.state.grad} 
                onChange={this.handleChange} 
                type="date" 
                name="grad"/>
            </div>
            <button onClick={this.SchoolHistory}>ADD</button>
            <button >REMOVE</button>
            </form>
            </div>
            );
      }
}
export default SchoolHistory;
