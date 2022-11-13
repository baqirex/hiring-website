import React, { useEffect } from "react";
import CardContainer from "./cardContainer";
import Footer from "./footer";
import Header from "./header";
import Navbar from "./navbar";
import Presentations from "./presentations";

const Home = () => {
  return (
    <main className="myheader">
      <Navbar />
      <Header />
      <Presentations />
      <CardContainer />
      <Footer />
    </main>
  );
};

export default Home;
