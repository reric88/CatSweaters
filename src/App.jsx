import { useState, useEffect } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NavMenu from "./components/NavMenu";
import About from "./components/About";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Credit from "./components/Credit";

function App() {
  const  [currentPage, setCurrentPage] = useState('home')


  return (
    <>
      <Navbar />
      {currentPage === "home" ? <Home /> : ""}
      {currentPage === "gallery" ? <Gallery /> : ""}
      {currentPage === "about" ? <About /> : ""}
      {currentPage === "contact" ? <Contact /> : ""}
      {currentPage === 'credit' ? <Credit /> : ''}
    </>
  );
}

export default App;
