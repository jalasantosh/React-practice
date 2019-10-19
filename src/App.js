import React from 'react';
import logo from './logo.svg';
import './App.css';
import Topnav from './commons/topnav';
import Leftsidebar from './commons/leftsidebar';
import Rightsidebar from './commons/right-sidebar';
import MainContent from './commons/mainContent';
import { BrowserRouter as Router } from 'react-router-dom';



function App() {
  return (
    <div>
      <Router>
        <Topnav />
        <Leftsidebar />
        <Rightsidebar />
        <MainContent />
      </Router>
    </div>
  );
}

export default App;
