import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';

class Question1 extends Component {
    state = {
    }

    buttonFunction = (val) =>{
        document.getElementById("text-field").value = null
        this.props.buttonPressed(val)
    }



    render() {
        return (
            <div>
                <h2 class="Question">Question {this.props.number}</h2>
                <p class="QuestionOne">{this.props.question}</p>
                <div class="button">
                    <Button bsSize="large" onClick={() => this.buttonFunction(1)}>1</Button>
                    <Button bsSize="large" onClick={() => this.buttonFunction(2)}>2</Button>
                    <Button bsSize="large" onClick={() => this.buttonFunction(3)}>3</Button>
                </div>
                <p class= "Other">Other</p>
                <div class="Text">
                    <input type="number"  id="text-field" onInput={() => this.props.buttonPressed(document.getElementById("text-field").value)} class="form-control" aria-label="Other Option" aria-describedby="other-field">
                    </input>
                </div>
            </div>
        );
    }
}

export default Question1;
