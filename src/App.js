import * as React from 'react';
import Button from '@mui/material/Button';
import ProjectView from './Layout/ProjectView';
import Header from './Layout/Header';
import HeaderBar from './Layout/HeaderBar';
import {data} from './data/data';

function App() {
  const {projects, about, skills, acheivements, contact} = data
  return (
    <div className="App">
      <Header />
      <HeaderBar />
      <ProjectView projects={projects} />
    </div>
  );
}

export default App;
