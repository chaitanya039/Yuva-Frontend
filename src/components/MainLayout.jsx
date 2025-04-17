import React from "react";
import Header from "../containers/Header";
import Footer from "../containers/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="scroll-smooth">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
