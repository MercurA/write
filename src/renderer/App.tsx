import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MainContainer from '../container/MainContainer';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContainer />} />
      </Routes>
    </Router>
  );
}
