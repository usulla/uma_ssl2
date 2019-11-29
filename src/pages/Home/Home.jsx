import React from "react";
import Header from "./Header/Header.jsx";
import About from "./About.jsx";
import Competence from "./Competence.jsx";
import Projects from "./Projects.jsx";
import News from "./News.jsx";

const Home = ({ isMobile, dataNews, dataAbout, header_title }) => {
  return (
    <article>
      <Header isMobile={isMobile} title={header_title} />
      <About slider_list={dataAbout} />
      <Competence isMobile={isMobile} dataNews={dataNews} />
      <Projects isMobile={isMobile} />
      <News isMobile={isMobile} dataNews={dataNews} />
    </article>
  );
};

export default Home;
