import React, { useState, useEffect } from 'react';
import { useUserDetails } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

function Home() {
  const { userId, fetchUserId } = useUserDetails();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  function handlePlay() {
    if (username.trim()) {
      fetchUserId(username.trim());
    } else {
      alert("Please enter a valid username.");
    }
  }

  useEffect(() => {
    if (userId) {
      navigate("/quiz");
    }
  }, [userId, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="text-center p-8 rounded-lg bg-white shadow-lg w-80 md:w-96">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6">
          Play Quiz?
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Ready to test your knowledge? Enter your username to start.
        </p>
        
        {/* Username Input */}
        <div className="mb-6">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter Username"
          />
        </div>

        {/* Play Button */}
        <button 
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 cursor-pointer"
          onClick={handlePlay}
        >
          Play
        </button>
      </div>
    </div>
  );
}

export default Home;
