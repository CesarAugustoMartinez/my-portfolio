import React, { useState } from "react";
import Container from "../components/Container/Container";
import Navbar from "../components/Navbar/Navbar";
import About from "../components/Sections/About";
import Experience from "../components/Sections/Experience";
import Intro from "../components/Sections/Intro";
import Projects from "../components/Sections/Projects";
import Skills from "../components/Sections/Skills";
function Home(props) {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <Navbar sidebar={sidebar} isActive={showSidebar} />
      <Container sidebar={sidebar} isActive={showSidebar}>
        <Intro/> 
        <About/>
        <Experience/>
        <Projects/>
        <Skills/>

      </Container>
    </>
  );
}

export default Home;
