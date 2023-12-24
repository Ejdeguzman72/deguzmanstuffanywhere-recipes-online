import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer/Footer';
import LandingPage from './page/LandingPage';
import HomePage from './page/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <div>
        <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
