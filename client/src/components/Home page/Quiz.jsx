import React, { useEffect, useState } from "react";
import { isAuthenticated, saveQuiz } from "../auth";
import Header from "../Home page/Header";
import * as Questions from "../../constants/questions.json";
import QuestionComponent from "./QuestionComponent";
import { useNavigate } from "react-router-dom";

const data = isAuthenticated();

function Quiz() {
  const navigate = useNavigate();
  const { questions } = Questions;

  const [loading, setLoading] = useState(true);
  const [problems, setProblems] = useState([]);
  const [current, setCurrent] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  var results = [
    `Your results indicate that you have no, or very few symtoms of social
    anxiety. If you notice that your symptoms aren't improving, you may want to 
    bring them up with mental health professional or someone who is supporting you`,

    `Your results indicate that you may be experiencing moderate social anxiety.
     While your symptoms are not likely having a major impact on your life,
      it is important to monitor them. These results do not mean that you have social anxiety disorder,
       but it may be time to start a conversation with a mental health professional`,

    `Your results indicate that you may be experiencing extreme social anxiety.
        Based on your answers, living with these symptoms is causing great difficulty managing relationships 
        and even the tasks of everyday life. These results do not mean that you have social anxiety disorder,
         but we would recommend you start a conversation with a mental health professional`,

    `Your results indicate that you may be experiencing extreme
          social anxiety. Based on your answers, living with these symptoms is causing great difficulty managing relationships 
          and even the tasks of everyday life. These results do not mean that you have social anxiety disorder,
           but we would recommend you start a conversation with a mental health professional`,
  ];

  const nextQuestion = () => {
    if (current + 1 !== problems.length) setCurrent(current + 1);
    else handleSubmit();
  };

  useEffect(() => {
    questions.map((singleQ) => {
      problems.push({ question: singleQ, points: 0 });
    });
    console.log(problems.length);
    setLoading(false);
  }, []);

  const handleSubmit = async () => {
    let user = {
      userID: data.Data.data.userID,
      score: calculateSum(),
      quizDate: new Date(),
    };
    const res = await saveQuiz(user);
    if (res.Status.code === 200) {
      setSubmitted(true);
      navigate("/home");
    } else {
      alert("Error uploading quiz marks");
    }
  };

  const calculateSum = () => {
    let total = 0;

    problems.map((singleQ) => {
      total += singleQ.points;
    });
    return total;
  };

  const result = (total) => {
    if (total >= 0 && total <= 25) {
      return <p>{results[0]}</p>;
    } else if (total > 25 && total <= 50) {
      return <p>{results[1]}</p>;
    } else if (total > 50 && total <= 75) return <p>{results[2]}</p>;
    else return <p>{results[3]}</p>;
  };

  const refresh = () => {
    window.location.reload(false);
  };

  return loading ? (
    <h2>Loading</h2>
  ) : submitted ? (
    <>
      <br></br>
      <div className="box">
        <h3>Congratulations on completing the test on social anxiety</h3>
        <h3>You obtain a score of {calculateSum()} points</h3>
        {result(calculateSum())}
        <button className="btn" onClick={refresh}>
          Done
        </button>
      </div>
    </>
  ) : (
    <div className="homepad">
      <QuestionComponent
        questions={problems}
        index={current}
        setQuestion={setProblems}
        nextQ={nextQuestion}
      />
    </div>
  );
}

export default Quiz;
