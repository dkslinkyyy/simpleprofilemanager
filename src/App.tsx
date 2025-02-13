import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Card from "./components/Card";
import "./global_style.css";

const App: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>("");

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <BrowserRouter>
      <Card activeLink={activeLink}>
        <Navigation activeLink={activeLink} onLinkClick={handleLinkClick} />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Card>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
