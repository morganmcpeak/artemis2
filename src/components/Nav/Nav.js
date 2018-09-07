import React, {
    Component
} from 'react';
import {
    toElement as scrollToElement
} from '../../utils/scroll';
import './style.css';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {
            isSticky: false
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        if (window.pageYOffset > this.nav.offsetTop) {
            this.setState({
                isSticky: true
            });
        } else {
            this.setState({
                isSticky: false
            });
        }
    }

    scrollToPage(pageSelector) {
        const nextPage = document.querySelector(pageSelector);
        scrollToElement(nextPage);
    }
    render() {
        const stickyClass = this.state.isSticky ? 'sticky' : '';
        return (
            <nav
              className={stickyClass}
              ref={(elem) => {
                this.nav = elem;
              }}
            >
            <div className="logobox">
            <img src="assets/images/artemislogo.png" className="logo2" onClick={(e) =>this.scrollToPage('.index-page')}></img>
            <img src="assets/logo.png" className="logo" onClick={(e) =>this.scrollToPage('.index-page')}></img>
            </div>
                <div className="menu">
                <div
                    className="home active"
                    onClick={(e) => this.scrollToPage('.index-page')}
                    >
                    Home
                    </div>

                    <div
                    className="about active"
                    onClick={(e) => this.scrollToPage('.about-page')}
                    >
                    About
                    </div>
                    
                    <div
                    className="industry"
                    onClick={(e) => this.scrollToPage('.industry-page')}
                    >
                    Industry Experience
                    </div>

                    <div
                    className="recruit"
                    onClick={(e) => this.scrollToPage('.recruit-page')}
                    >
                    Recruitment Solutions
                    </div>

                    
                    <div
                    className="careers"
                    onClick={(e) => this.scrollToPage('.career-page')}
                    >
                    Careers
                    </div>

                    <div
                    className="contact"
                    onClick={(e) => this.scrollToPage('.contact-page')}
                    >
                    Contact
                    </div>

                </div>
                <div className="menu-border"></div>
            </nav>
          );

    }
}
export default Nav;