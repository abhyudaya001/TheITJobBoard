import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./navbar";
import Homepage from "./home";
import Freshers from "./jobs/freshers";
import Experienced from "./jobs/experienced";
import Internships from "./internships";
import { useState } from "react";
import PostJobs from "./PostJobs/postjobs";
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/postjobs" element={<PostJobs/>}/>
      <Route path="/jobs/freshersjobs" element={<Freshers/>}/>
      <Route path="/jobs/experiencedjobs" element={<Experienced/>}/>
      <Route path="/internships" element={<Internships/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
