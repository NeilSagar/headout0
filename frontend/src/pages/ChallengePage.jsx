import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserDetails } from "../context/UserContext";
import CircularIndeterminate from "../components/Loading";

function ChallengePage() {
    const { '*': challengeId } = useParams(); // Retrieves the dynamic part of "/challenge/{value}"
    const { fetchFriendsScore } = UserDetails();

    
    const [friendName, setFriendName] = useState(null);
    const [friendScore, setFriendScore] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const [isLoading,setIsLoading] = useState(false);

    const navigate = useNavigate();
    
    function handleStartChallenge() {
        navigate("/home");
    }

    async function fetchDetails(id) {
        setIsLoading(true);
        const response = await fetchFriendsScore(id);
        if (response) {
            setFriendName(response.userName);
            setFriendScore(response.score);
        } else {
            setErrorMessage("No resource found for this challenge. Please check the link or try again later.");
        }
        setIsLoading(false);
    } 

    useEffect(() => {
        if (challengeId) {
            fetchDetails(challengeId);
        }
    }, [challengeId]);

    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500 px-4">
        {isLoading?<CircularIndeterminate/>:
        <>
            {/* Beautifully Styled Error Message */}
        {errorMessage && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg shadow-md mb-6 max-w-md text-center">
            <p className="font-semibold text-lg">⚠️ Oops! Something went wrong.</p>
            <p className="text-sm">{errorMessage}</p>
          </div>
        )}

        {/* Challenge Details */}
        {friendName && friendScore!==null && (
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg">
            {/* Challenge Message */}
            <h1 className="text-3xl font-bold text-center text-gray-700 mb-4">Challenge Accepted!</h1>
    
            <p className="text-lg text-center text-gray-600 mb-6">
              Your friend <span className="font-semibold text-green-700">{friendName}</span> has challenged you to beat their score! 🎯
            </p>
    
            <div className="bg-yellow-100 p-4 rounded-lg mb-6">
              <h2 className="text-2xl font-bold text-center text-gray-700 mb-2">Your Friend's Score:</h2>
              <p className="text-3xl font-semibold text-center text-gray-800">{friendScore}</p>
            </div>
    
            {/* Display Challenge ID */}
            <div className="text-center mb-6">
              <p className="text-lg text-gray-700">Challenge ID: <span className="font-bold text-blue-700">{challengeId}</span></p>
            </div>
    
            <p className="text-xl text-center text-gray-700 mb-6">
              Wanna beat their score? The quiz will have 10 questions.
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
        )}
        </>}
        
      </div>
    );
}

export default ChallengePage;
