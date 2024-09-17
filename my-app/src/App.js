import React from 'react';
import './App.css';
import Hero from './components/Hero';
import ClassSection from './components/ClassSection';
import Stats from './components/Stats';
import BestInstructor from './components/BestInstructor';
import Feeback from './components/Feeback';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero />
      <ClassSection />
      <Stats />
      <BestInstructor />
      <Feeback />
      <Footer />
    </div>
  );
}

export default App;
