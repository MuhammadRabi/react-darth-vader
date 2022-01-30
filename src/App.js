import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Articles from "./components/Articles/Articles";
import Gallery from "./components/Gallery/Gallery";
import Pricing from "./components/Pricing/Pricing";
import Services from "./components/Services/Services";
import Stats from "./components/Stats/Stats";
import Testimonials from "./components/Testimonials/Testimonials";
import Works from "./components/Works/Works";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/footer";
import ScrollTop from "./components/ScrollTop/ScrollTop";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Articles />
      <Gallery />
      <Pricing />
      <Services />
      <Testimonials />
      <Stats />
      <Works />
      <Skills />
      <Footer />
      <ScrollTop />
    </>
  );
};

export default App;
