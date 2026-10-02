import fotoPerfil from '../assets/foto-perfil.png';

export default function Hero() {
    return (
        <section className="hero wrap">
            <div className="hero-photo">
                <div className="photo-frame">
                    <img src={fotoPerfil} alt="Minha imagem" />
                </div>
            </div>
            <div className="hero-text">
                <div className="hero-eyebrow">Olá, me chamo</div>
                <h1>
                    Vinícius Fernandes
                    <span className="role">Front-End Developer</span>
                </h1>

                <div className="hero-actions">
                    <a href="#projetos" className="btn primary">Ver projetos</a>
                    <a href="#contato" className="btn ghost">Fale comigo</a>
                </div>
            </div>
        </section>
    );
}
