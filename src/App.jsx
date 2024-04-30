import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Makanan from "./pages/Makanan";
import Minuman from "./pages/Minuman";
import Promo from "./pages/Promo";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/makanan" element={<Makanan />} />
        <Route path="/menu/minuman" element={<Minuman />} />
        <Route path="/promo" element={<Promo />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
