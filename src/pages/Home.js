// Home.js
import Resumo from "../components/Resumo";

function Home() {
  return (
    // Usamos um Fragment <> para não adicionar uma div desnecessária
    <>
      {/* Seção 1: Bem-vindo */}
      <div className="welcome-section">
        <h2>Bem-vindo à Fontes Aguas Novas</h2>
        <p>Esta é a página inicial do nosso site.</p>
      </div>

      {/* Seção 2: Resumo */}
      <Resumo />
    </>
  );
}

export default Home;
