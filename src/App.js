import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home';
import Chapter_1 from './Chapters/chapter_1';
import Chapter_2 from './Chapters/chapter_2';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
         
          <Route path='/' element={<Home/>} />
          <Route path="/chapter-1" element={<Chapter_1/>} />
          <Route path="/chapter-2" element={<Chapter_2/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;