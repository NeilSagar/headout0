function Quiz() {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg">
          {/* Card Content */}
          <h1 className="text-3xl font-bold text-center text-gray-700 mb-4">Question 1</h1> {/* Question Heading */}
          
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">Clues</h2>
  
          <div className="mb-6">
            <p className="text-lg text-gray-600">Clue 1: <span className="font-semibold">The capital of France</span></p>
            <p className="text-lg text-gray-600">Clue 2: <span className="font-semibold">Known for the Eiffel Tower</span></p>
          </div>
  
          <h2 className="text-xl font-bold text-center text-gray-700 mb-4">Options</h2>
  
          {/* Options */}
          <div className="grid grid-cols-2 gap-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer transform transition-all duration-300">
              Option 1
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer transform transition-all duration-300">
              Option 2
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer transform transition-all duration-300">
              Option 3
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer transform transition-all duration-300">
              Option 4
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Quiz;
  