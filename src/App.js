import Header from "./components/Header/Header";
import About from "./components/About us/About";
import Services from "./components/Services/Services";
import Products from "./components/Produts/Products";
import Details from "./components/Details/Details";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Header />
      <section className="about" id="about">
        <About />
      </section>
      <section className="services" id="services">
        <Services />
      </section>
      <section className="products" id="products">
        <Products />
      </section>
      <section className="details" id="details">
        <Details />
      </section>
      <section className="contact" id="contact">
        <Contact />
      </section>




    </>
  );
}

export default App;
