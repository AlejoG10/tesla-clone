import React, { useEffect } from "react";
import { Navbar, Home, Footer } from "../components";

function Tesla() {
  useEffect(() => {
    document.title = "Tesla | Project";
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default Tesla;
