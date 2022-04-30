import React, {Component} from "react";
import CVForm from"./components/CVForm";
import SchoolHistory from "./components/SchoolHistory";
import WorkHistory from "./components/WorkHistory";
import "./App.css"
class App extends Component{
  constructor(props){
    super(props);
    this.state={};
  }
  render(){
    return(
    <div className="main">
      <div className="box">
      <CVForm/>
      <button onClick={true}className="continue">continue</button>
      <SchoolHistory/>
      <WorkHistory/>
      <button onClick={this.SchoolHistory}className="finish">Submit</button>
      </div>
      </div>
    );
  }
}
export default App;
