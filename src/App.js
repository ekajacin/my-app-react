import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ResizeAudio from "./pages/ResizeAudio";
import ResizeImage from "./pages/ResizeImage";

function App() {
  return (
     <>
     <BrowserRouter>
     <Dashboard>
      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/resizeImage" element={<ResizeImage/>}></Route>
        <Route path="/resizeAudio" element={<ResizeAudio/>}></Route>
      </Routes>
      </Dashboard>
      </BrowserRouter>
     </>

  );
}

export default App;
