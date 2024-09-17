import './App.css';
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Work } from './pages/Work';
import { Contact } from './pages/Contact';
import 'remixicon/fonts/remixicon.css';
import { Footer } from './components/Footer';


function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/work"} element={<Work />} />
        <Route path={"/contact"} element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
