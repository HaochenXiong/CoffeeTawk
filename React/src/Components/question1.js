import React, { Component } from 'react';

class Question1 extends Component {
    state = {
    }

    onInput = (e) =>{
        this.props.InputText(e.target.value)
    }



    render() {
        return (
            <div>
                {/* This display the index of the question */}
                <h2 class="Question">Question {this.props.number}</h2>
                {/* This displays the actual question */}
                <p class="QuestionOne">{this.props.question}</p>
                {/* Here we can have as many buttons are needed for the 
                multiple choice answers, each using the function 
                that was passed as a prop to report back to the App Component
                which button was pressed: */}
                <div class="button">
                    <button class="button1" onClick={() => this.props.buttonPressed(1)}>1</button>
                    <button onClick={() => this.props.buttonPressed(2)}>2</button>
                    <button onClick={() => this.props.buttonPressed(3)}>3</button>
                </div>
                <div class="Other">
                    <span>Other</span>
                </div>
                <div class="Text">
                    <input type="number"  id="text-field" onInput={this.onInput} class="form-control" aria-label="Other Option" aria-describedby="other-field">
                    </input>
                </div>
            </div>
        );
    }
}

export default Question1;
