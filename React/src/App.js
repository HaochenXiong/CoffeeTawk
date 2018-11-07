import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/header'
import Question1 from './Components/question1'
import Question2 from './Components/question2'
import Button from './Components/button'


class App extends Component {
  constructor(props) {

    super(props);

    this.state = {
      answerToQuestionOne: "0",
      answerToQuestionTwo: "0",
      otherNumber: "0"
    }
  };

  changeAnswerToQuestionOne = (val) => {
    this.setState({
      answerToQuestionOne: val,
    })
  }
  
  changeAnswerToQuestionTwo = (val) => {
    this.setState({
      answerToQuestionTwo: val,
    })
  }

  changeOther = (val) => {
    this.setState({
      otherNumber: val
    })
  } 
  
  changeAnswerBack = () => {
    this.setState({
      answerToQuestionOne: "0",
      answerToQuestionTwo: "0",
    })
  }  
  
  render() {
    return (
      <div>

        <Header />
        <Question1 number={1} question="How much coffee did you drink today?" buttonPressed={this.changeAnswerToQuestionOne} InputText={this.changeOther} states={this.state} />
        <p class="One">Answer:{this.state.answerToQuestionOne}</p>
        <Question2 number={2} question="Take up, or delivery?" buttonPressed={this.changeAnswerToQuestionTwo}/>
        <p class= "Explain">(1-Always Takeup 5-Always Delivery)</p>
        <p class= "Two">Answer:{this.state.answerToQuestionTwo}</p>
        <Button wordPressed={this.changeAnswerBack}/>
        
      </div>
    );
  }
}

export default App;
