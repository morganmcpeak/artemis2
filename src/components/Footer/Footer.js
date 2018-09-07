import React from 'react';
import './style.css';

const Footer = () => {
    return (
        <div className="footer">
        <p class="footertext">When the need for better results overcomes the fear of change, we can help.</p>
        <a href="https://twitter.com/artemissearch" target="blank"><img src="assets/social_icons/twitter-icon-artemis.png" class="icon"/></a>
        <a href="https://www.facebook.com/artemissearchgroup/" target="blank"><img src="assets/social_icons/facebook-icon-artemis.png" class="icon"/></a>
        <a href="https://www.linkedin.com/company/artemis-search-group-inc./" target="blank"><img src="assets/social_icons/linkedin-icon-artemis.png" class="icon"/></a>
        <a href="mailto:info@artemissearchgroup.com"><img src="assets/social_icons/email-icon-artemis.png" class="icon"/></a>
        <p class="call">Call Artemis Search Group today! (248)499-8001</p>
        </div> 
       );
}

export default Footer;