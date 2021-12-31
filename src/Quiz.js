import React, { Component } from "react";
let quizData = require("./quiz_data.json");

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz_position: 1
    };
  }
  render() {
    return (
      <div>
        <div className="QuizQuestion">
          {/* {this.state.quizdata.map((data, index) => {
            return (
              <div key={index}>
                {" "}
                {data.id} . {data.instruction_text}{" "}
              </div>
            );
          })} */}
          {quizData.quiz_questions[0].instruction_text}
        </div>
      </div>
    );
  }
}

export default Quiz;
