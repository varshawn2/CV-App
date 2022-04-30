import react,{Component} from "react";
import CustomInput from "../customInput/CustomInput";
export class StepOneComponent extends Component{
    constructor(props){
        super(props);
        this.state={ 
        };
    }   
    componentDidMount(){
        console.log("step one complete")
    }
    render(){
        return ( 
            <div className="personalContainer"> 
            <h1 className="header">CV Form</h1>
            <form>
            <h3 className="title">Personal Information</h3>
            <label htmlFor="firstName">First Name:</label>
            <CustomInput 
             name="firstName"
             label ="First Name"  
             onChange= {this.handleChange}
             value= {this.state.firstName}
            />
            <label htmlFor="lastName">Last Name:</label>
            <CustomInput 
             name="lastName"
             label ="Last Name"  
             onChange= {this.handleChange}
             value= {this.state.lastName}
            />

            <label htmlFor="email">Email:</label>
            <CustomInput
             name="email"
             label ="Email"  
             onChange= {this.handleChange}
             value= {this.state.email}/>
            <label htmlFor="phone">Cell Number:</label>
            <CustomInput
             name="phone"
             label ="Cell Number"  
             onChange= {this.handleChange}
             value= {this.state.phone}/>
            </form> 
            </div>
            );
      }
}

export default StepOneComponent