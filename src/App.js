import React from 'react';
import Navbar from './components/navbar/navbar';
import Hide from './components/sidebar/hide';
import Options from "./components/sidebar/options";
import Projects from "./components/sidebar/projects";
import Thoughts from './components/sidebar/thoughts';

function App(){
  return(
    <div>
      <Navbar />
      <Hide />
      <Options />
      <Projects />
      <Thoughts />
    </div>
  )
}

export default App;