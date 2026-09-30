import "./styles.css";
import logoIcon from "../../assets/Logo.svg";
import { Link } from "react-router-dom";

export default function HeaderClient() {

  return (
    <header className="header">
      <nav className="container">
        <Link to="/">
          <a className="logo">
            <img src={logoIcon} alt="Logo Portifólio" />
          </a>
        </Link>
        <div className="navbar-right">
          <div className="menu-items-container">
            <div className="menu-item">
              <Link to="/home">Home</Link>
              <Link to="/sobre">Sobre</Link>
              <Link to="/habilidades">Habilidades</Link>
              <Link to="/projetos">Projetos</Link>
              <Link to="/contato">Contato</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}