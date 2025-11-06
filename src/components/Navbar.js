import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <h1 className="logo-text">Fontes Aguas Novas</h1>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sobre">Sobre</Link>
        </li>
        <li>
          <Link to="/diretoria">Diretoria</Link>
        </li>
        <li>
          <Link to="/voluntarios">Voluntarios</Link>
        </li>
        <li>
          <Link to="/transparencia">Prestação de Contas</Link>
        </li>
        <li>
          <Link to="/doar">Doar</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
