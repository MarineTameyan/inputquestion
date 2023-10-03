import React, { useEffect, useState } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import { routerLinks } from "../router/router";

export const Questionform = () => {
  const [inputValue, setInputValue] = useState("");
  const [answerForms, setAnswerForms] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const quiz = JSON.parse(localStorage.getItem('answerForms'))
    if (quiz) {
        setAnswerForms(quiz)
    }
  }, []);

  function handleQuestionChange(e, index) {
    const updatedForms = [...answerForms];
    updatedForms[index].question = e.target.value;
    setAnswerForms(updatedForms);
  }

  function handleAnswerChange(e, questionIndex, answerIndex) {
    const updatedForms = [...answerForms];
    updatedForms[questionIndex].answers[answerIndex] = e.target.value;
    setAnswerForms(updatedForms);
  }

  function addForm() {
    if (answerForms.length < 10) {
      setAnswerForms([...answerForms, { question: inputValue, answers: ["", "", "", ""] }]);
      setInputValue(""); 
      setError("");
    } else {
      setError("You cannot add more than ten forms.");
    }
  }

  function onSave() {
    localStorage.setItem("answerForms", JSON.stringify(answerForms)); 
  }

  return (
    <div className="form">
      <div className="buttons">
        <button onClick={addForm}>Add</button>
        <button onClick={onSave}>Save</button>
        <NavLink to={routerLinks.QUIZ}>Quiz</NavLink>
      </div>
      {error && <p className="error">{error}</p>}
      {answerForms.map((form, questionIndex) => (
        <div key={questionIndex} className="answer-form">
          <div className="textarea">
            <textarea
              className="text"
              placeholder="Question"
              value={form.question}
              onChange={(e) => handleQuestionChange(e, questionIndex)}
            ></textarea>
          </div>
          <div className="answer">
            {form.answers.map((answer, answerIndex) => (
              <label key={answerIndex}>
                <input type="radio" />
                <input
                  type="text"
                  placeholder="Answer"
                  className="examples"
                  value={answer}
                  onChange={(e) => handleAnswerChange(e, questionIndex, answerIndex)}
                />
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

