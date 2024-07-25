import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import OneBox from './components/OneBox';


function App() {
  return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage/>} />
                <Route path="/onebox" element={<OneBox />} />
            </Routes>
        </Router>
  );
}

export default App;
