import * as React from 'react';
import Button from '@mui/material/Button';
import ProjectView from './Layout/ProjectView';
import Header from './Layout/Header';
import HeaderBar from './Layout/HeaderBar';
import AboutMe from './Layout/AboutMe';
import {data} from './data/data';

function App() {
  const {projects, about, skills, acheivements, contact} = data
  return (
    <div className="App">
      <HeaderBar />
      <ProjectView projects={projects} />
      <AboutMe about={about} skills={skills} achievements={acheivements} />
    </div>
  );
}

export default App;
