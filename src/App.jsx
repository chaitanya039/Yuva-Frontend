import "./App.css";
import About from "./containers/About";
import Category from "./containers/Category";
import Clients from "./containers/Clients";
import Contact from "./containers/Contact";
import Footer from "./containers/Footer";
import Header from "./containers/Header";
import Hero from "./containers/Hero";
import Manufacturing from "./containers/Manufacturing";
import Products from "./containers/Products";
import Sustainability from "./containers/Sustainability";

function App() {
  return (
    <div className="scroll-smooth">
      <Header />
      <Hero />
      <About />
      <Category />
      <Products />
      <Manufacturing />
      <Sustainability />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
