import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer/Footer';
import LandingPage from './page/LandingPage';
import HomePage from './page/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </header>
      <Footer />
    </div>
  );
}

export default App;
