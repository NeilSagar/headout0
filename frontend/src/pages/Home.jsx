import React from 'react';

function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="text-center p-8 rounded-lg bg-white shadow-lg w-80 md:w-96">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6">
          Play Quiz?
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Ready to test your knowledge? 
        </p>
        <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 cursor-pointer">
            Play
        </button>

      </div>
    </div>
  );
}

export default Home;
