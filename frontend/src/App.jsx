import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Home from './pages/Home.jsx';
import Quiz from './pages/Quiz.jsx';
import Score from './pages/Score.jsx';
import ChallengePage from './pages/ChallengePage.jsx';
import { UserProvider } from './context/UserContext.jsx';



function App() {
  return (
    <div>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/quiz' element={<Quiz />} />
            <Route path='/score' element={<Score />} />
            <Route path='/challenge/*' element={<ChallengePage />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
