import React from "react";
import "./quiz.css"
function QuestionComponent({ questions, index, setQuestion, nextQ }) {
  const { points, question } = questions[index];

  const setPoints = (p) => {
    let updateArray = [...questions];
    updateArray[index].points = p;
    setQuestion(updateArray);
    nextQ();
  };
  return (
    <>
    <br></br>
      <div className="box quiz-wrapper">

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="question" style={{ marginLeft: 10 }}>
            {question}
          </div>
          <br />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="btn_opt" onClick={() => setPoints(2)}>
            Never Avoid
          </div>
          <div className="btn_opt" onClick={() => setPoints(3)}>
            Sometimes Avoid
          </div>
          <div className="btn_opt" onClick={() => setPoints(4)}>
            Often Avoid
          </div>
          <div className="btn_opt" onClick={() => setPoints(5)}>
            Always Avoid
          </div>
          <br />
        </div>
      </div>
    </>
  );
}

export default QuestionComponent;
