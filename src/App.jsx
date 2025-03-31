import "./App.css";
import About from "./containers/About";
import Clients from "./containers/Clients";
import Contact from "./containers/Contact";
import Footer from "./containers/Footer";
import Header from "./containers/Header";
import Hero from "./containers/Hero";
import Manufacturing from "./containers/Manufacturing";
import Products from "./containers/Product";
import Sustainability from "./containers/Sustainability";

function App() {
  return (
    <div className="scroll-smooth">
      <Header />
      <Hero />
      <About />
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
