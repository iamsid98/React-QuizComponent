import React, { Component } from "react";
let quizData = require("./quiz_data.json");

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizdata: quizData.quiz_questions
    };
  }
  render() {
    return (
      <div>
        <div className="QuizQuestion">
          {this.state.quizdata.map((data, index) => {
            return (
              <div key={index}>
                {" "}
                {data.id} . {data.instruction_text}{" "}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Quiz;
