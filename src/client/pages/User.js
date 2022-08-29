import React from "react";
import { Header } from "../components/Header/Header.jsx";
import Account from "../components/Account";
import { Footer } from "../components/Footer/Footer.jsx";

export const User = () => {
  return (
    <div className="App">
      <Header />
      <Account />
      <Footer />
    </div>
  );
};
