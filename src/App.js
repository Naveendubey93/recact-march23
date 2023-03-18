import './App.css';
import {
  BrowserRouter as Router,
  // Switch,
  Routes,
  Route,
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
  const removeBodyClass = ()=> {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-info');
  }
  const toggleMode = (cls = false) => {
    removeBodyClass();
    if (mode === 'dark' &&  typeof(cls) === 'object') {
      console.log("Entered intl dark mode=== = == = = > 39");
      setMode('light');
      setColor('black')
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been enabled', 'success');
      document.title = 'TextUtils- light mode'
    } else if (cls && typeof(cls) === 'string') {
      setMode(cls);
      document.body.classList.add('bg-'+cls);
      setColor('white');
      document.body.style.backgroundColor = cls || '#042743';
      showAlert('Dark Mode has been enabled','success');
      document.title = `TextUtils- ${cls} mode`
    } else {
      removeBodyClass();
      setMode('dark');
      setColor('white');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark Mode has been enabled','success');
      document.title = 'TextUtils- dark mode'
    } 
  }
  return (
    <Router>
      <Navbar title = "Text-Project" mode={mode} toggleMode={toggleMode}  textColor={textColor}/>
      <Alert alert = {alert} />
      <Routes>
        <Route exact path="/about" element = {<About mode={mode} showAlert = {showAlert}  textColor={textColor} />} /> 
        <Route exact path="/" element = { 
          <TextForm mode={mode} showAlert = {showAlert} title = "Enter the text to analyze below" textColor={textColor}/>
      } />
    </Routes>
 </Router>   
  );
}

export default App;
