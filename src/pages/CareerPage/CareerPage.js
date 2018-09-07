import React from 'react';
import './style.css';
import Nav from '../../components/Nav';

const CareerPage = () => {
    return (
        <div className="career-page">
        <h1>Careers</h1>
        <div className="careerlinks">
        <a href="" target="blank" className="joblink1">Search Jobs</a>
        <a href="mailto:info@artemissearchgroup.com?subject=submit resume" class="joblink">Submit Resume</a>
        </div>
        <h3>"Life is, open book."</h3>
        <p className="copy">One of my professors at West Point said to our social psychology class as we sat terrified in our
        chairs, prior to our final exam, “I hope that you brought your reference materials, because, life,
        as is my test, open book.”</p>
        <p>As I began my recruiting career, the owner of the firm taught me two invaluable lessons. One,
            he taught me with his words. The other, he taught me with his behavior.</p>
        <h3>"When your success becomes more important to me than it is to you, I can no longer
            help you."</h3>
            <p className="translate">Translation: You are your career manager. Your success is your
                responsibility and entirely in your control.
            </p>
        <h3>"In order to hold on to "it" one must give it away."</h3>
        <p className="translate">Translation: Knowledge is indeed power. However, knowledge that is
                withheld by leaders hurts the team's ability to make decisions that help
                achieve the mission.</p>
        <p className="copy">It is in this spirit that we will share as much career management, leadership, professional
                improvement and recruiting industry training as possible. It's not the knowledge of the skill-set
                that makes one great! It's the understanding of what skill to apply to the customer's need.
                That's why we offer the entire tool kit, here for free!</p>
        <p className="check">Check back often!</p>
        </div>
    );
}

export default CareerPage;