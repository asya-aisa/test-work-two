import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './assets/styles/index.scss'
import PageOne from './components/screens/pageOne/PageOne'
import PageTwo from './components/screens/pageTwo/PageTwo'

function App() {
  return (<Router>
    <Routes>
      <Route path='/' element={<PageOne/>}/>
      <Route path='/stepTwo' element={<PageTwo/>}/>
    </Routes>
  </Router>);
}

export default App;
