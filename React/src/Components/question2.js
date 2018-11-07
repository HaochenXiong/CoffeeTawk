import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';

class Question2 extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                {/* This display the index of the question */}
                <h2 class= "Question">Question {this.props.number}</h2>
                {/* This displays the actual question */}
                <p class= "QuestionOne">{this.props.question}</p>
                {/* Here we can have as many buttons are needed for the 
                multiple choice answers, each using the function 
                that was passed as a prop to report back to the App Component
                which button was pressed: */}
                <div class= "button">
                <Button bsSize="large" onClick={() => this.props.buttonPressed("1")}>1</Button>
                <Button bsSize="large" onClick={() => this.props.buttonPressed("2")}>2</Button>
                <Button bsSize="large" onClick={() => this.props.buttonPressed("3")}>3</Button>
                <Button bsSize="large" onClick={() => this.props.buttonPressed("4")}>4</Button>
                <Button bsSize="large" onClick={() => this.props.buttonPressed("5")}>5</Button>
                
                </div>
            </div>
            );
    }
}
 
export default Question2;