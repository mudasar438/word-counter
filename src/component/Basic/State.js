import React , {Component} from "react";

class State extends Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            name:"TRUGET",
            age:"22",

        };
    };
nameChangeHandler(){
    console.log(this.state);
    this.setState({name:"Ertrul", age:"18"}, () => {
        console.log(this.state);
    });
}

    render(){
        return(


            <div>{this.state.name}, {this.state.age}
            
            <br></br>
            <button onClick = {() => this.nameChangeHandler()}> Button</button>
            
            </div>
        );
    };
};
export default State;

// in this component us this state in class base component and use a function nameChangeHandler
//to change name , age. this function is applied on the button as written in the code