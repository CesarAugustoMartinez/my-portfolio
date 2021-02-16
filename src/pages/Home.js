import React, { useState } from "react";
import Container from "../components/Container/Container";
import Navbar from "../components/Navbar/Navbar";
function Home(props) {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
        <Navbar sidebar={sidebar} isActive={showSidebar} />
        <Container sidebar={sidebar} isActive={showSidebar}>
        <section id="intro" className="section scrollspy full-height">
            <div className="overlay"></div>
            <div className="container">
                <h2>
                    I really enjoy <span class="teal">working hard</span><br/>and always
                    <span className="underline">do my best</span>.
                </h2>

            </div>
        </section>
          
        </Container>      
    </>
  );
}

export default Home;
