import './App.css';
// import About from './components/About';
import {
  BrowserRouter as Router,
  // Switch,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
function App() {
  const [mode, setMode] = useState('dark');
  const [textColor, setColor] = useState('black');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type,
    })
    setTimeout(() => {
      setAlert(null);
    },2000)
  }
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      setColor('black')
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been enabled', 'success');
      document.title = 'TextUtils- light mode'
    } else {
      setMode('dark');
      setColor('white');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark Mode has been enabled','success');
        document.title = 'TextUtils- dark mode'
    } 
  }
  console.log("setColor = == = = = >", textColor);
  return (
  
    <div> 
        <Router>
      <Navbar title = "Text-Project" mode={mode} toggleMode={toggleMode}  textColor={textColor}/>
      <Alert alert = {alert} />
      <div className="my-3">
      <Routes>
        <Route exact path="/about" element = 
          {<About />} /> 
          <Route exact path="/" element = { 
          <TextForm  showAlert = {showAlert} title = "Enter the text to analyze below" textColor={textColor}/>
        } />
         </Routes>
        </div>
  
     </Router>
     </div> 
  );
}

export default App;
