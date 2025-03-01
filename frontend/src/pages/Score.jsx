import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserDetails } from "../context/UserContext.jsx";
import { frontend_hosted_url } from "../config/config.js";

function Score() {
  const { currentScore, userId } = UserDetails();
  const [score, setScore] = useState(0);
  const [copySuccess, setCopySuccess] = useState(false);

  const navigate = useNavigate();
  const shareLink = `${frontend_hosted_url}/challenge/${userId}`;

  useEffect(() => {
    if (!userId) {
      navigate("/home");
    }
    setScore(currentScore);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(shareLink);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000); // Reset message after 2 seconds
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-pink-500 to-orange-500">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg">
        {/* Card Content */}
        <h1 className="text-3xl font-bold text-center text-gray-700 mb-4">Congratulations!</h1>

        <p className="text-lg text-center text-gray-600 mb-6">
          You've completed the quiz successfully! 🎉
        </p>

        <div className="bg-blue-100 p-4 rounded-lg mb-6">
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-2">Your Score:</h2>
          <p className="text-3xl font-semibold text-center text-gray-800">{score}</p>
        </div>

        <h2 className="text-xl font-bold text-center text-gray-700 mb-4">Challenge a Friend!</h2>

        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <p className="text-lg text-center text-gray-600 mb-4">
            Share this link with a friend to challenge them:
          </p>

          <div className="flex justify-center items-center bg-white rounded-lg shadow-md p-4 w-full max-w-xs">
            <input 
              type="text" 
              value={shareLink} 
              readOnly 
              className="bg-gray-200 text-gray-600 p-2 rounded-l-lg w-3/4"
            />
            <button 
              onClick={handleCopy}
              className=" px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 cursor-pointer transform transition-all duration-300"
            >
              Copy Link
            </button>
          </div>

          {/* Copy Success Message */}
          {copySuccess && (
            <p className="text-center text-green-600 font-semibold mt-2">✅ Link Copied!</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Score;
