import * as React from 'react';
import ProjectView from './Layout/ProjectView';
import HeaderBar from './Layout/HeaderBar';
import AboutMe from './Layout/AboutMe';
import ContactMe from './Layout/ContactMe';
import {data} from './data/data';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Theme/theme';

function App() {
  const {projects, about, skills, acheivements, contact} = data
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <HeaderBar />
      <ProjectView projects={projects} />
      <AboutMe about={about} skills={skills} achievements={acheivements} />
      <ContactMe contact={contact} />
    </div>
    </ThemeProvider>
  );
}

export default App;
