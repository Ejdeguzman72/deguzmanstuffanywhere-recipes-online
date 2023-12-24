import React from 'react';
import LandingPageBtn from '../components/button/LandingPageBtn';
import ChefGIF from '../assets/chef.gif';

const LandingPage = () => {
    return (
        <div className="landing-page-container">
            <img src={ChefGIF} className="App-logo" alt=""/>
            <LandingPageBtn />
        </div>
    )
}

export default LandingPage;