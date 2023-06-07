import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ResizeAudio from "./pages/ResizeAudio";
import ResizeImage from "./pages/ResizeImage";

function App() {
  return (
     <>
     <BrowserRouter>
     {/* <Dashboard></Dashboard> */}
      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/resizeImage" element={<ResizeImage/>}></Route>
        <Route path="/resizeAudio" element={<ResizeAudio/>}></Route>
      </Routes>
      
      </BrowserRouter>
     </>

  );
}

export default App;
