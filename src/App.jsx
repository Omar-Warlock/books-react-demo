import { Route, Routes } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Home from "./components/pages/Home";
import NotMatch from "./components/error404/NotMatch";
import About from "./components/pages/About";
import Create from "./components/pages/Create";
import Contact from "./components/pages/Contact";
import Footer from "./components/shared/Footer";
import Details from "./components/pages/Details";
import Update from "./components/pages/Update";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/:id" element={<Details />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<Create />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
