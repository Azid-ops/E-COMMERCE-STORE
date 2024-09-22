import React from 'react';

import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Topbar from './Topbar/components/Topbar.tsx';


function MainView() {
  
  return (
    <>
      <Topbar />
      <Router>
        <Routes>
        </Routes>
      </Router>
    </>
  );
}

export default MainView;
