import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Home } from "./pages/Home";
import { Work } from "./pages/Work";
import { Contact } from "./pages/Contact";
import { Projects } from "./pages/Projects";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { SkipLink } from "./components/SkipLink";
import { DocumentLang } from "./components/DocumentLang";
import { routerBasename } from "./lib/locale";
import "remixicon/fonts/remixicon.css";

function App() {
  return (
    <BrowserRouter basename={routerBasename}>
      <SkipLink />
      <DocumentLang />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
