import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import PageOne from './PageOne';
import PageTwo from './PageTwo';

function App() {
  return (<Router>
    <Routes>
      <Route path='/' element={<PageOne />}/>
      <Route path='/stepTwo' element={<PageTwo/>}/>
    </Routes>
  </Router>);
}

export default App;
