import React from 'react';
import './style.css';
import Nav from '../../components/Nav';

const IndexPage = () => {
    return (
        <div className="index-page">
       <body background="assets/images/rocketship.jpg">
       <div class="welcome">
       <h1>Welcome</h1>
       <p>Artemis Search Group is an executive search firm dedicated to partnering with clients 
           that are committed to identifying, attracting, and integrating their industry's top talent 
           onto their team. We facilitate long-term professional marriages between organizations and 
           top-tier professionals.</p>
           <img src="assets/images/asg_logo.png" className="homelogo"/>
           </div></body>
       

         <Nav />
        </div>
    );
}

export default IndexPage;