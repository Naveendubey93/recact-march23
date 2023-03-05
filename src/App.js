import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <div className="class">
      <Navbar title = "Text-Project"/>
      <div className="container">
        <TextForm title = "Enter text"/>
      </div>
    </div>
  );
}

export default App;
