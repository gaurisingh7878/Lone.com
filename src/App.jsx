import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import Navbar from "./Navbar/Navbar";
import About from "./Page/About";
import Contact from "./Page/Contact";
import NewsletterFooter from "./NewsletterFooter/NewsletterFooter";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
      <NewsletterFooter/>
    </Router>
  );
}

export default App;

