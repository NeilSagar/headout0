import { useNavigate } from "react-router-dom";

function ChallengePage() {
    const friendName = "Harsh";  // Example name, you can dynamically pass the name
    const friendScore = 8;  // Example score, replace with actual score logic
    
    const navigate = useNavigate();
    function handleStartChallenge(){
        navigate("/quiz");
    }
    
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg">
          {/* Challenge Message */}
          <h1 className="text-3xl font-bold text-center text-gray-700 mb-4">Challenge Accepted!</h1> {/* Heading */}
  
          <p className="text-lg text-center text-gray-600 mb-6">
            Your friend <span className="font-semibold text-green-700">{friendName}</span> has challenged you to beat their score! 🎯
          </p>
  
          <div className="bg-yellow-100 p-4 rounded-lg mb-6">
            <h2 className="text-2xl font-bold text-center text-gray-700 mb-2">Your Friend's Score:</h2>
            <p className="text-3xl font-semibold text-center text-gray-800">{friendScore}</p>
          </div>
  
          <p className="text-xl text-center text-gray-700 mb-6">
            Wanna beat their score? Quiz will have 10 questions.
          </p>
          
          <div className="flex justify-center">
            <button 
              className="cursor-pointer px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300"
              onClick={handleStartChallenge}
            >
              Start Challenge
            </button>
          </div>
  
        </div>
      </div>
    );
  }
  
  export default ChallengePage;
  