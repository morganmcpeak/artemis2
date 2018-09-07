import React, { Component } from 'react';
import './App.css';
import IndexPage from './pages/IndexPage';
import AboutPage from './pages/AboutPage';
import CareerPage from './pages/CareerPage';
import ContactPage from './pages/ContactPage';
import IndustryPage from './pages/IndustryPage';
import RecruitPage from './pages/RecruitPage';
import HireVetPage from './pages/HireVetPage';
import InsourcePage from './pages/InsourcePage';
import Footer from './components/Footer';
class App extends Component {
  render() {
    return (
      <div className="App">

      <IndexPage />
      <AboutPage />
      <IndustryPage />
      <RecruitPage />
      <CareerPage />
      <ContactPage />
      <HireVetPage />
      <InsourcePage />
      <Footer />
      

      </div>
    );
  }
}

export default App;
