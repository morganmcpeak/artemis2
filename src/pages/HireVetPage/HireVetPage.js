import React from 'react';
import './style.css';
import Nav from '../../components/Nav';

const HireVetPage = () => {
    return (
        <div className="hire-vet-page">
        <h1>Hire A Veteran</h1>
        <p>Artemis Search Group, Inc is passionate about helping our transitioning service men and women. We are committed to bringing our clients and our heroes together to continue the mission - keeping Americans safe by keeping the American economy strong. Ask us about hiring a transitioning service member or industry experienced service member. 100% of clients hiring a former uniformed service member from Artemis Search Group, hired another within 1 year.</p>
        <img src="assets/images/aerospace.jpg" className="vetpic"></img>
        </div>
    );
}

export default HireVetPage;