import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Diretoria from "./pages/Diretoria";
import Voluntarios from "./pages/Voluntarios";
import Transparencia from "./pages/Transparencia";
import Doar from "./pages/Doar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/diretoria" element={<Diretoria />} />
          <Route path="/voluntarios" element={<Voluntarios />} />
          <Route path="/transparencia" element={<Transparencia />} />
          <Route path="/doar" element={<Doar />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
