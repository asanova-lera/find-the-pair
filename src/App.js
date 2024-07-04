import React, { useState, useEffect } from 'react';
import Board from './components/Board';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Board />
    </div>
  );
}

export default App;
