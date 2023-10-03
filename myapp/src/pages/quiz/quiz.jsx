// import React, { useState, useEffect } from "react";

// export const Quiz = () => {
//   const [questions, setQuestions] = useState([]);
//   const [userAnswers, setUserAnswers] = useState(Array(10).fill(""));
//   const [showScore, setShowScore] = useState(false);

//   useEffect(() => {
//     const storedData = JSON.parse(localStorage.getItem("answerForms"));
//     setQuestions(storedData);
//   }, []);

//   const correctAnswers = [
//     "Yerevan",
//     "Hyper Text Markup Language",
//     "const and let",
//     "8",
//     "6",
//     "<ol>",
//     "<textarea>",
//     "<script>",
//     "7",
//     "50"
//   ];

//   

//   const handleCheckAnswers = () => {
//     setShowScore(true);
//   };

//   const calculateScore = () => {
//     return questions.reduce((score, question, questionIndex) => {
//       const isCorrect = userAnswers[questionIndex] === question.correctAnswer;
//       return isCorrect ? score + 1 : score;
//     }, 0);
//   };
  

//   return (
//     <div>
//       <h1>Quiz</h1>
//       <div>
//         <button className="check-answers" onClick={handleCheckAnswers}>
//           Check Answers
//         </button>
//       </div>
//       {showScore && (
//         <div>
//           <h2>Score</h2>
//           <p>You got {calculateScore()} out of {questions.length} correct answers.</p>
//         </div>
//       )}
//     </div>
//   );
// };

