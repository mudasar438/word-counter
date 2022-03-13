
import React ,{Component} from "react";


class Pson extends Component{
    constructor(props){
        super(props);
        this.props = props;

    }
   
    render(){
        return(
            <div>
          
           <h3>What are you doing
               Hy I Am a Developer {<br></br>}
               {this.props.name} {<br></br>}
               {this.props.nick}
           </h3>
           
          
        </div>
        );
    }
}
export default Pson;
