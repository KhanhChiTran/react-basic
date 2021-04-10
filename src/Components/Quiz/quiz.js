import React, { Component } from "react";
import data from "./data.json";
import "./style.scss";
class Quiz extends Component {
  constructor() {
    super();
    this.category = data.map((item) => item.category);
    this.state = {
      category: "",
      count: 0,
      reset: null,
      isAnswered: false,
    };
    console.log(data);
  }
  itemClickedHandler = (value) => {
    console.log(value);
    this.setState({
      category: this.category.filter((item) => item.category === value),
    });
  };
  handleAnswer = (answer, correct_answer, event) => {
    this.setState({
      isAnswered: true,
    });
    if (answer !== correct_answer) {
      event.target.classList.add("incorrect");
      this.setState({ reset: event });
    }
  };
  render() {
    const { correct_answer, incorrect_answers, question } = data[
      this.state.count
    ];
    const answers = [...incorrect_answers, correct_answer].sort();
    return (
      <div>
        <div>
          <h3>Category: </h3>

          <label
            onClick={() => this.itemClickedHandler(this.state.category)}
            htmlFor='music'
          >
            Music{" "}
            <input
              value='Entertainment: Music'
              type='radio'
              name='music'
              id='music'
            />
          </label>

          <label htmlFor='film'>
            Film{" "}
            <input
              value='Entertainment: Film'
              type='radio'
              name='film'
              id='film'
            />
          </label>
          <label htmlFor='history'>
            History
            <input value='History' type='radio' name='history' id='history' />
          </label>

          <label htmlFor='game'>
            Video Games{" "}
            <input
              value='Entertainment: Video Games'
              type='radio'
              name='game'
              id='game'
            />
          </label>
        </div>
        <div>
          <h3>Difficulty: </h3>
          <select name='' id=''>
            <option value='easy'>Easy</option>
            <option value='medium'>Medium</option>
            <option value='hard'>Hard</option>
          </select>
        </div>
        {/* {data.map((item, index) => (
          <div key={index} className='question'>
            <h3>{item.question}</h3>
            <div className='answer'>
              <button>{item.correct_answer}</button>
              {item.incorrect_answers.map((a) => (
                <button>{a}</button>
              ))}
            </div>
          </div>
        ))} */}
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
          {/* <button className='btn submit'>Submit</button> */}
          <button
            onClick={() => {
              console.log(this.state.reset);
              if (this.state.reset) {
                this.state.reset.target.classList.toggle("incorrect");
              }
              this.setState({
                count: this.state.count + 1,
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
