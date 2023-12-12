import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Summarizer from './components/summarizer/Summarizer';
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/summarizer" element={<Summarizer/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
