import React, { useState } from "react";
import "./style.css";

export const Questionform = () => {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState(["", "", "", ""]);
  const [showAnswers, setShowAnswers] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(-1);
  const [color, setColor] = useState("black"); // Initialize color as black

  const handleChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleAnswerChange = (index, e) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = e.target.value;
    setAnswers(updatedAnswers);
  };

  const handleClickButton = () => {
    setShowAnswers(true);
  };

  const changeClick = () => {
    if (selectedAnswerIndex === 2) {
      // If the selected answer is the correct answer (index 2), set its color to green
      setColor("green");
    } else {
      // If the selected answer is not the correct answer, set its color to red
      setColor("red");
    }
  };

  const getColor = (index) => {
    return selectedAnswerIndex === index ? color : "black";
  };

  return (
    <div className="form">
      <label className="question">
        <input type="text" onChange={handleChange} placeholder="Question" />
      </label>
      <div className="answers">
        {answers.map((answer, index) => (
          <label key={index}>
            <input type="radio" />
            <input
              type="text"
              onChange={(e) => handleAnswerChange(index, e)}
              placeholder={`Answer ${index + 1}`}
            />
          </label>
        ))}
        <button className="submit-button" onClick={handleClickButton}>Submit</button>
      </div>
      {showAnswers && (
        <div className="box">
          <p className="question-box">{question}</p>
          {answers.map((answer, index) => (
            <div key={index}>
              <label className="answers-box">
                <input
                  type="checkbox"
                  checked={selectedAnswerIndex === index}
                  onChange={() => setSelectedAnswerIndex(index)}
                />
                <p style={{ color: getColor(index) }}>{answer}</p>
              </label>
            </div>
          ))}
          <button className="click-button" onClick={changeClick}>Click</button>
        </div>
      )}
    </div>
  );
};
