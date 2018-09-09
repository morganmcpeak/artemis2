import React from 'react';
import './style.css';
import Nav from '../../components/Nav';
// test commit
const ContactPage = () => {
    return (
        <div className="contact-page">
        <h1>Contact Us</h1>
            <p className="quote">There is nothing else than now. There is neither yesterday, certainly, nor is there
                    any tomorrow. How old must you be before you know that?"</p>
            <p className="ernest">-Ernest Hemingway</p>
            <p>We are very interested in hearing from you! If you are exploring options for
                better opportunities or you are looking for new solutions to today's team
                building realities, we can help! Always error on the side of action!</p>
            <form 
                className="form" 
                action="//formspree.io/mcpeakmorgan@gmail.com" 
                method="POST">
                <input className="email" type="text" name="_replyto" placeholder="Email" />
                <input className="company" type="text" name="company" placeholder="Company" />
                <input className="title" type="text" name="title" placeholder="Title" />
                <input className="firstname" type="text" name="firstname" placeholder="First Name" />
                <input className="lastname" type="text" name="lastname" placeholder="Last Name" />
                <input className="address" type="text" name="address" placeholder="Address" />
                <input className="city" type="text" name="city" placeholder="City" />
                <div className="selection">
            <select className="state" name="state">
            <option value="State">State</option>
            <option value="AL">AL</option>
             <option value="AK">AK</option>
             <option value="AZ">AZ</option>
             <option value="AR">AR</option>
             <option value="CA">CA</option>
             <option value="CO">CO</option>
             <option value="CT">CT</option>
             <option value="DE">DE</option>
             <option value="FL">FL</option>
             <option value="GA">GA</option>
             <option value="HI">HI</option>
             <option value="ID">ID</option>
             <option value="IL">IL</option>
             <option value="IN">IN</option>
             <option value="IA">IA</option>
             <option value="KS">KS</option>
             <option value="KY">KY</option>
             <option value="LA">LA</option>
             <option value="ME">ME</option>
             <option value="MA">MA</option>
             <option value="MI">MI</option>
             <option value="MN">MN</option>
             <option value="MS">MS</option>
             <option value="MO">MO</option>
             <option value="MT">MT</option>
             <option value="NE">NE</option>
             <option value="NV">NV</option>
             <option value="NH">NH</option>
             <option value="NJ">NJ</option>
             <option value="NM">NM</option>
             <option value="NY">NY</option>
             <option value="NC">NC</option>
             <option value="ND">ND</option>
             <option value="OH">OH</option>
             <option value="OK">OK</option>
             <option value="OR">OR</option>
             <option value="PA">PA</option>
             <option value="RI">RI</option>
             <option value="SC">SC</option>
             <option value="SD">SD</option>
             <option value="TN">TN</option>
             <option value="TX">TX</option>
             <option value="UT">UT</option>
             <option value="VT">VT</option>
             <option value="VA">VA</option>
             <option value="WA">WA</option>
             <option value="WV">WV</option>
             <option value="WY">WY</option>
                </select>
                </div>
                <input className="zip" type="text" name="zip" placeholder="zip" />
                <input className="phone" type="text" name="phone" placeholder="Phone" />
                <input className="industry" type="text" name="industry" placeholder="Industry" />
                <textarea className="comments" name="comments" placeholder="Comments" />
                <input className="submit" type="submit" value="Send" />
                <input type="hidden" name="_subject" value="New Message for Third Well" />
            </form>
    
        </div>
    );
}

export default ContactPage;