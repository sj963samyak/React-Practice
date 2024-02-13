import { useState } from "react";
import "./App.css";
import { Home, About, ContactUs, Header, Footer } from "./Components";
// import "./index.js";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Footer />
      <Home />
      <About />
      <ContactUs />
    </>
  );
}

export default App;
