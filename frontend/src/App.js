import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BannerPage from './pages/BannerPage';
import About from './pages/About';
import ListPage from './pages/ListPage'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
    <div className="App">
       <Routes>
            <Route path='/' element={<BannerPage />} />
            <Route path='/about' element={<About />} />
            <Route path='/list' element={<ListPage />} />
          </Routes>
    </div>
    </Router>
  );
}

export default App;
