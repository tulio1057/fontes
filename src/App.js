// App.js - VERSÃO CORRIGIDA

import { Routes, Route } from "react-router-dom";
import "./App.css";
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
      {/* 1. Navbar fica no topo, fora de qualquer contêiner de conteúdo */}
      <Navbar />

      {/* 2. O conteúdo principal da página (as rotas) vem depois */}
      <main className="App-content">
        {" "}
        {/* Adicionamos uma classe para estilizar se precisar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/diretoria" element={<Diretoria />} />
          <Route path="/voluntarios" element={<Voluntarios />} />
          <Route path="/transparencia" element={<Transparencia />} />
          <Route path="/doar" element={<Doar />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
