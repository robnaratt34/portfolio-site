import * as React from 'react';
import Button from '@mui/material/Button';
import ProjectView from './Layout/ProjectView';
import Header from './Layout/Header';
import HeaderBar from './Layout/HeaderBar';

function App() {
  return (
    <div className="App">
      <Header />
      <HeaderBar />
      <ProjectView />
    </div>
  );
}

export default App;
