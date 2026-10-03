export default function About() {
    return (
        <section
            id="sobre"
            style={{
                height: '100vh',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxSizing: 'border-box',
                paddingTop: '80px',
                background: 'linear-gradient(to bottom, var(--bg, #000000) 0%, var(--bg-elevated) 180px, var(--bg-elevated) 100%)'
            }}
        >
            <div className="wrap" style={{ width: '100%' }}>
                <div className="section-head">
                    <h2>Sobre mim</h2>
                </div>
                <div className="about-grid">
                    <div>
                        <p>
                            Sou um estudante de programação apaixonado por transformar ideias em interfaces
                            acessíveis, funcionais e visualmente agradáveis. Gosto de trabalhar onde o design
                            encontra o código, criando experiências digitais que unem estética, usabilidade e
                            desempenho.
                        </p>
                        <p>
                            Estou sempre buscando aprender novas tecnologias, aprimorar minhas habilidades e
                            transformar cada projeto em uma oportunidade de evoluir.
                        </p>
                    </div>
                    <div className="stack-card">
                        <span className="stack-label">Stack principal</span>
                        <ul className="stack-list">
                            <li><span className="chevron">›</span> React + Vite</li>
                            <li><span className="chevron">›</span> TypeScript • JavaScript</li>
                            <li><span className="chevron">›</span> Java • Spring Boot • APIs REST</li>
                            <li><span className="chevron">›</span> Git • GitHub</li>
                        </ul>
                        <div className="social-row" style={{ marginTop: '24px' }}>
                            <a
                                href="curriculo.pdf"
                                download
                                className="btn_cv"
                                style={{ width: '100%' }}
                            >
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M12 3v12" />
                                    <path d="M7 10l5 5 5-5" />
                                    <path d="M4 19h16" />
                                </svg>
                                Baixar currículo
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}