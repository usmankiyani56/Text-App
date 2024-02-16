import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light');
  const [butntext, setbutntext] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout (() => {
      setAlert(null)
    }, 1000)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      setbutntext("Enable Light Mode"); // Moved inside the if block
      showAlert("Dark Mode has been Enabled", "success");
      document.title = ("TextVitals - Dark Mode")
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setbutntext("Enable Dark Mode"); // Moved inside the else block
      showAlert("Light Mode has been Enabled", "success");
      document.title = ("TextVitals - Light Mode")
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextVitals" mode={mode} toggleMode={toggleMode} butntext={butntext} />
        <Alert alert={alert} />
        <Routes>
  <Route path="/about" element={<About />} />
  <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter Text" mode={mode} toggleMode={toggleMode} />} />
</Routes>
      </Router>
    </>
  );
}

export default App;