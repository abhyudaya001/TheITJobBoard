import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./navbar";
import Homepage from "./home";
import ContactUs from "./contactus";
import Freshers from "./jobs/freshers";
import Experienced from "./jobs/experienced";
import Internships from "./internships";
import { useState } from "react";
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/contactus" element={<ContactUs/>}/>
      <Route path="/jobs/freshersjobs" element={<Freshers/>}/>
      <Route path="/jobs/experiencedjobs" element={<Experienced/>}/>
      <Route path="/internships" element={<Internships/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
