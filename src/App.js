import React, { useState, useEffect } from 'react';
import Board from './components/Board';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient flex items-center justify-center">
      <Board />
    </div>
  );
}

export default App;
