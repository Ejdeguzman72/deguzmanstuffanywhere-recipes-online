import React from 'react';
import { HashRouter, Link } from 'react-router-dom';

const LandingPageBtn = () => {

    return (
        <div>
            <Link to="/home" className="landing-page-btn">
                Click Here
            </Link>
        </div>
    )
}

export default LandingPageBtn;