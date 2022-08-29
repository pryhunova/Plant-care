import React from "react";
import { Header } from "../components/Header/Header.jsx";
import { Hero } from "../components/Hero/Hero.jsx";
import { Main } from "../components/Main/Main.jsx";
import { Footer } from "../components/Footer/Footer.jsx";

export const Home = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Main />
      <Footer />
    </div>
  );
};
