import React from 'react';
import GeneratePswd from './GeneratePswd';
import Specify from './SpecsPswd';
import Header from './Header';
import '../styles.css';

function App() {
  
  
  return (
    <div id='main-container'>
      
      <Header />
      <GeneratePswd />
      <Specify />
    </div>
  )
    
}

export default App;