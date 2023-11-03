import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage/HomePage';
import Services from './Services/Services';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='services/*' element={<Services/>}/>
      </Routes>
    </Router>
  );
}

export default App;
