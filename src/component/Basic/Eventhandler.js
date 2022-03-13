import React , {Component} from "react";

class Eventhandler extends Component{
    constructor(props){
        super(props);
        this.props = props;

    };
    render(){
        return(
            <div>
                <h3>Hello Developers</h3>
                {this.props.name}
                {this.props.age}
            </div>
        );
    };
};

export default Eventhandler;
