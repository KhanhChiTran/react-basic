import React, { Component } from "react";
import data from "./data.json";
import "./style.scss";
class Quiz extends Component {
  constructor() {
    super();
    this.data = data
    this.state = {
      category: [],
      choosed : false,
      count: 0,
      reset: null,
      isAnswered: false,
    };
  }

  categoryHandler = ()=>{
    this.setState({
      choosed : !this.state.choosed
    })
  }
  handleAnswer = (answer, correct_answer, event) => {
    this.setState({
      isAnswered: true,
    });
    if (answer !== correct_answer) {
      event.target.classList.add("incorrect");
      this.setState({ reset: event });
    }
  };
  checkItem = (number,length)=>{
    if(number > length){
      return 0
    }else{
      return number + 1
    }
      }
  render() {
    const { correct_answer, incorrect_answers, question } = data[
      this.state.count
    ];
    const answers = [...incorrect_answers, correct_answer].sort();
    const categories = data.map(item=>item.category)
    const newCategories = new Set(categories)
    const difficulty = data.map(item=>item.difficulty)
    const newDifficulty = new Set(difficulty)
    console.log(newDifficulty)
    return (
      <div>
        <div className='btn-wrap'>   
       {[...newCategories].map(category =>
        <button className = 'category-btn'
       key = {category.id}
            onClick={this.categoryHandler}
            
          >{category}
          </button>)}
        </div>
        <div className='type'>
          {this.state.choosed && [...newDifficulty].map(type=>
         <button className ='type-btn'>{type}</button>)}
        </div>
        <div className='quiz-card'>
          <div className='question'>
            {" "}
            <h3>{question}</h3>
          </div>
          <div className='answers'>
            {answers.map((answer) => (
              <span
                className={`${
                  this.state.isAnswered && answer === correct_answer
                    ? "correct"
                    : ""
                }`}
                onClick={(event) => {
                  if (!this.state.isAnswered) {
                    this.handleAnswer(answer, correct_answer, event);
                  } else {
                    return;
                  }
                }}
              >
                {answer}
              </span>
            ))}
          </div>
        </div>
        <div className='cta-btn'>
          <button
            onClick={() => {
              console.log(this.state.reset);
              if (this.state.reset) {
                this.state.reset.target.classList.toggle("incorrect");
              }

              
              this.setState({
                count: this.checkItem(this.state.count,answers.length),
                isAnswered: false,
                reset: null,
              });
            }}
            className='btn next'
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default Quiz;
