import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '../page/LandingPage';
import HomePage from '../page/HomePage';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={ <LandingPage /> } />
                <Route path="/home" element={ <HomePage/> } />
                <Route element={ <LandingPage /> } />
            </Routes>
        </Router>
    )
}

export default AppRoutes;