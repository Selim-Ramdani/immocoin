import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import HousingData from "./components/HousingData";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/housing' element={<HousingData />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;