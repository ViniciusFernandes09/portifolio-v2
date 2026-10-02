import { Link } from "react-router-dom";
import logoIcon from "../../assets/Logo.svg"


export default function Header() {
  
  return (
    <header>
      <nav className="nav.wrap">
        <Link to="/" className="logo">
        <img src={logoIcon} alt="Loogo potifólio" />
        </Link>
        <ul className="nav-links">
          <li><a href="#sobre">Home</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#habilidades">Habilidades</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}