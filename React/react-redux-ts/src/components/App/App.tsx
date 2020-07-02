import React from 'react';
import './App.css';
import Recorder from '../Recorder.tsx';
import Calendar from '../Calendar';

function App() {
  return (
    <div className="App">
      <Recorder />
      <Calendar />
    </div>
  );
}

export default App;
