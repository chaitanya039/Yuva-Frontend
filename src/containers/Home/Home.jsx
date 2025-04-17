import React from "react";
import { motion } from "framer-motion";
import MainLayout from "../../components/MainLayout";

import Hero from "./Hero";
import About from "./About";
import Category from "./Category";
import Products from "./Products";
import Manufacturing from "./Manufacturing";
import Services from "./Services";
import Contact from "./Contact";

const Home = () => {
  return (
    <MainLayout>
      {/* Animate ONLY Hero */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Hero />
      </motion.div>

      {/* Static render for remaining sections (no animation) */}
      <About />
      <Category />
      <Products />
      <Manufacturing />
      <Services />
      <Contact />
    </MainLayout>
  );
};

export default Home;
