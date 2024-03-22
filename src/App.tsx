import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Counter from "./components/Counter";

const App = () => {
  return (
    <section
      style={{
        width: "1200px",
        margin: "0 auto",
      }}
    >
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
          display: "flex",
          gap: "10px",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/counter">Counter</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </section>
  );
};

export default App;
