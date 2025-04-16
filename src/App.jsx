import "./App.css";
import About from "./containers/About";
import Category from "./containers/Category";
import Contact from "./containers/Contact";
import Footer from "./containers/Footer";
import Header from "./containers/Header";
import Hero from "./containers/Hero";
import Products from "./containers/Products";
import Services from "./containers/Services";
import Manufacturing from "./containers/Manufacturing"

function App() {
  return (
    <div className="scroll-smooth">
      <Header />
      <Hero />
      <About />
      <Category />
      <Products />
      <Manufacturing />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
