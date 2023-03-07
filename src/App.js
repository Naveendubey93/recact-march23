import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
function App() {
  const [mode, setMode] = useState('dark');
  const [textColor, setColor] = useState('white');
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      setColor('black')
      document.body.style.backgroundColor = 'white';
    } else {
      setMode('dark');
      setColor('white');
      document.body.style.backgroundColor = '#042743';
    } 
  }
  console.log("setColor = == = = = >", textColor);
  return (
    <div className="class">
      <Navbar title = "Text-Project" mode={mode} toggleMode={toggleMode}  textColor={textColor} />
      <div className="container my-3">
        <TextForm title = "Enter the text to analyze below" textColor={textColor}/>
        {/* <About/> */}
      </div>
    </div>
  );
}

export default App;
