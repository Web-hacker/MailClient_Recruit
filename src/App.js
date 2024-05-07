import React from 'react';
import Home from './component/Home';
import Compose from './component/Compose';
import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/compose" element={<Compose />} />
    </Routes> 
    </BrowserRouter>
  );
}

export default App;
