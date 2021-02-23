import React, { useState} from "react";
import Container from "../components/Container/Container";
import Navbar from "../components/Navbar/Navbar";
import About from "../components/Sections/About";
import Contact from "../components/Sections/Contact";
import Education from "../components/Sections/Education";
import Experience from "../components/Sections/Experience";
import Intro from "../components/Sections/Intro";
import Projects from "../components/Sections/Projects";
import Skills from "../components/Sections/Skills";
import Modal from "../components/Modal/Modal";
function Home(props) {
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);
  const [open, setOpen] = useState(false);  
  function handleClickOpen (){
    setOpen(true);
  };
  function handleClose () {
    setOpen(false);
  };

  return (
    <>
      <Navbar sidebar={sidebar} isActive={showSidebar} handleClickOpen={handleClickOpen}/>
      <Container sidebar={sidebar} isActive={showSidebar}>
        <Intro/> 
        <About/>
        <Experience/>
        <Projects/>
        <Skills/>
        <Education/>
        <Contact/>
        <Modal open={open} handleClose={handleClose}/>        
      </Container>

    </>
  );
}

export default Home;
