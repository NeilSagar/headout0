import React, { useState } from 'react';
import Confetti from 'react-confetti';

function Quiz() {
  const [correctAnswerSelected, setCorrectAnswerSelected] = useState(false);
  const [showFunFacts, setShowFunFacts] = useState(false);
  const [answerStatus, setAnswerStatus] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0); // Track current question

  // Fun facts for the city
  const funFacts = [
    "The Eiffel Tower is 330 meters tall.",
    "Paris has 130 museums.",
    "Paris is known as the 'City of Lights'.",
    "The Louvre Museum is the largest art museum in the world.",
  ];

  // Questions and options
  const questions = [
    {
      question: "Clues: The capital of France, Known for the Eiffel Tower",
      options: ["London", "Paris", "Rome", "Berlin"],
      correctAnswer: "Paris",
      funFacts: funFacts,
    },
    {
      question: "Clues: Known for pizza and Colosseum, Located in Italy",
      options: ["Paris", "London", "Rome", "Berlin"],
      correctAnswer: "Rome",
      funFacts: [
        "The Colosseum could hold up to 80,000 spectators.",
        "Rome is known as the 'Eternal City'.",
        "There are 280 fountains in Rome.",
        "Rome has more fountains than any other city in the world.",
      ],
    },
    // Add more questions as needed
  ];

  const handleAnswerSelection = (answer) => {
    if (answer === questions[currentQuestion].correctAnswer) { // Correct answer
      setCorrectAnswerSelected(true);
      setAnswerStatus('Correct! ' + questions[currentQuestion].correctAnswer + ' is the right answer.');
      setShowFunFacts(true);
    } else {
      setAnswerStatus('Incorrect. ' + questions[currentQuestion].correctAnswer + ' is the correct answer.');
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1); // Move to the next question
    setCorrectAnswerSelected(false); // Reset answer state
    setShowFunFacts(false); // Reset fun facts
    setAnswerStatus(''); // Reset the answer status
  };

  // Make sure not to exceed the question array length
  const isLastQuestion = currentQuestion === questions.length - 1;

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      {/* Confetti Effect on correct answer */}
      {correctAnswerSelected && <Confetti />}
      
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg overflow-hidden">
        {/* Question Content */}
        {!correctAnswerSelected && (
          <>
            <h1 className="text-3xl font-bold text-center text-gray-700 mb-4">Question {currentQuestion + 1}</h1>
            <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">{questions[currentQuestion].question}</h2>
            <h2 className="text-xl font-bold text-center text-gray-700 mb-4">Options</h2>

            <div className="grid grid-cols-2 gap-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer transform transition-all duration-300"
                  onClick={() => handleAnswerSelection(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        )}

        {/* Answer Status Message */}
        {answerStatus && (
          <div className="mt-4 text-center">
            <p className={`text-xl font-semibold ${correctAnswerSelected ? 'text-green-500' : 'text-red-500'}`}>
              {answerStatus}
            </p>
          </div>
        )}

        {/* Fun Facts Card */}
        {showFunFacts && (
          <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md overflow-y-auto h-48">
            <h3 className="text-2xl font-semibold text-center text-gray-700 mb-4">Fun Facts</h3>
            <ul className="list-disc pl-6 space-y-2">
              {questions[currentQuestion].funFacts.map((fact, index) => (
                <li key={index} className="text-lg text-gray-600">{fact}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Next Question Button */}
        {answerStatus && !isLastQuestion && (
          <div className="mt-6 text-center">
            <button
              onClick={handleNextQuestion}
              className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300"
            >
              Next Question
            </button>
          </div>
        )}

        {/* End of Quiz Button */}
        {answerStatus && isLastQuestion && (
          <div className="mt-6 text-center">
            <button
              onClick={() => setCurrentQuestion(0)} // Reset to first question
              className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300"
            >
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;
