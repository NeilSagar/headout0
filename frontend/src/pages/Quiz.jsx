import React, { use, useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { UserDetails } from '../context/UserContext';

import {useNavigate}  from "react-router-dom";
import CircularIndeterminate from '../components/Loading';

function Quiz() {
  const [correctAnswerSelected, setCorrectAnswerSelected] = useState(false);
  const [answerStatus, setAnswerStatus] = useState(null);
  const [question,setQuestion] = useState(null);
  const [options,setOptions] = useState(null);
  const [funFacts,setFunFacts] = useState(null);
  const [showResultPageButton,setShowResultPageButton] = useState(false);

  const [isLoading,setIsLoading] = useState(false);

  const {fetchNextQuestion,currentQuestionCount,userId,checkAnswerAndFetchFunFacts} = UserDetails();
  const navigate = useNavigate();

  const handleAnswerSelection = async(answer) => {
    setAnswerStatus(null);
    const response = await checkAnswerAndFetchFunFacts(answer);
    if(response){
      console.log(response);
      const isCorrect = response.isCorrect;

      if(!isCorrect){
        const answerStatus = `${answer} is not correct.`;
        setCorrectAnswerSelected(false);
        setAnswerStatus(answerStatus);
      }else{
        const answerStatus = `${answer} is correct.`;
        setCorrectAnswerSelected(true);
        setAnswerStatus(answerStatus);
        setFunFacts(response.funFacts);
      }
      console.log(currentQuestionCount);
      if(currentQuestionCount == 10){
        setShowResultPageButton(true);
      }else{
        setShowResultPageButton(false);
      }
    }
    
  };

  const handleNextQuestion = async() => {
    setIsLoading(true);
    setCorrectAnswerSelected(null);
    setAnswerStatus(null);
    setQuestion(null);
    setOptions(null);
    setFunFacts(null);
    
    const response = await fetchNextQuestion();
    if(response){
      setQuestion(response.clues);
      setOptions(response.options);
      setIsLoading(false);
    }

  };

  useEffect(()=>{
    async function setNextQuestionAndOptions(){
      setIsLoading(true);
      const response = await fetchNextQuestion();
      if(response){
        setQuestion(response.clues);
        setOptions(response.options);
        setIsLoading(false);
      }
    }
    setNextQuestionAndOptions();
  },[]);

  useEffect(()=>{
    if(!userId){
      navigate("/home");
    }
  },[userId]);


  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      {isLoading?<CircularIndeterminate/>:
        <>
          {/* Confetti Effect on correct answer */}
      {correctAnswerSelected && <Confetti />}
      
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg overflow-hidden">
        {/* Question Content */}
        {!correctAnswerSelected && (
          <>
            <h1 className="text-3xl font-bold text-center text-gray-700 mb-4">Question {currentQuestionCount}</h1>
            <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">Clues </h2>
            
            {
              question && question.map((clue, index) => (
                <div className="flex items-center mb-4">
                  <svg className="h-5 w-5 text-gray-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm0 0l4 4" />
                  </svg>
                  <h3 className="text-xl font-bold text-gray-500 text-left">
                    {clue}
                  </h3>
                </div>
              ))
            }

            
            
            <h2 className="text-xl font-bold text-center text-gray-700 mb-4">Options</h2>

            <div className="grid grid-cols-2 gap-4">
              {options && options.map((option, index) => (
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
        {funFacts && (
          <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md overflow-y-auto h-48">
            <h3 className="text-2xl font-semibold text-center text-gray-700 mb-4">Fun Facts</h3>
            <ul className="list-disc pl-6 space-y-2">
              {funFacts.map((fact, index) => (
                <li key={index} className="text-lg text-gray-600">{fact}</li>
              ))}
            </ul>
          </div>
        )}

        {answerStatus && currentQuestionCount<10 && (
          <div className="mt-6 text-center">
            <button
              onClick={handleNextQuestion}
              className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300"
            >
              Next Question
            </button>
          </div>
        )}

        {showResultPageButton && (
          <div className="flex justify-center mt-6">
            <button
              onClick={() => navigate("/score")}
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 cursor-pointer"
            >
              View Results
            </button>
          </div>
        )}
      </div>
        </>
      }
      
    </div>
  );
}

export default Quiz;
