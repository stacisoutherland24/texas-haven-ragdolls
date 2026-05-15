import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";

import Home     from "./pages/Home";
import Queens   from "./pages/Queens";
import Kittens  from "./pages/Kittens";
import Gallery  from "./pages/Gallery";
import FAQ      from "./pages/FAQ";
import Contact  from "./pages/Contact";
import Waitlist from "./pages/Waitlist";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/"         element={<Home />} />
            <Route path="/queens"   element={<Queens />} />
            <Route path="/kittens"  element={<Kittens />} />
            <Route path="/gallery"  element={<Gallery />} />
            <Route path="/faq"      element={<FAQ />} />
            <Route path="/contact"  element={<Contact />} />
            <Route path="/waitlist" element={<Waitlist />} />
          </Routes>
        </main>
        <Footer />
        <ChatBot />
      </div>
    </BrowserRouter>
  );
}
