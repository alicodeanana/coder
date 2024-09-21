import React from 'react';
import Home from './stranice/Home.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './stranice/About.js';
import Usluge from './stranice/Usluge.js';
import Contacts from './stranice/Contacts.js';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/usluge" element={<Usluge></Usluge>}></Route>
      <Route path="/contacts" element={<Contacts></Contacts>}></Route>
    
    </Routes>
    </BrowserRouter>
    
  );
};

export default App;
