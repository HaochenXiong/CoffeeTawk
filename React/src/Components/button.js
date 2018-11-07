import React, { Component } from 'react';


class Button extends Component{
    state={ }
    
onClick = () =>{
    this.props.wordPressed()
    
}
    
    render() {
        return (
     <a onClick= {this.onClick}>
      <div class = "Submit" id = "FunctionButton">
        <h2 class= "SubButton">Submit</h2>
      </div>
     </a> 
        );
    }
}

export default Button;