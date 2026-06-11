/* style.css - Agro Forte 2026 | Futuro Sustentável */
/* Tema futurista com equilíbrio entre produção e meio ambiente */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    background-color: #050b12;
    color: #eef5ff;
    line-height: 1.5;
    scroll-behavior: smooth;
    overflow-x: hidden;
}

/* Fundo com grid e gradientes futuristas */
.bg-futuristic {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
    background: radial-gradient(circle at 20% 30%, #0a1a1f, #010101);
}

.bg-futuristic::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: 
        linear-gradient(rgba(0, 255, 170, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 255, 170, 0.03) 1px, transparent 1px);
    background-size: 40px 40px;
    pointer-events: none;
}

/* Partículas animadas */
.particle-glow {
    position: fixed;
    width: 100%;
    height: 100%;
    background: radial-gradient(2px 2px at 20% 40%, #0f6, rgba(0,255,170,0.2), transparent);
    opacity: 0.3;
    filter: blur(30px);
    z-index: -1;
    animation: drift 20s infinite alternate;
}

@keyframes drift {
    0% { transform: translate(0%, 0%) scale(1); opacity: 0.2; }
    100% { transform: translate(3%, 2%) scale(1.1); opacity: 0.35; }
}

/* Container principal */
.container {
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 2rem;
}

/* Navbar */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.8rem 0;
    flex-wrap: wrap;
    border-bottom: 1px solid rgba(0, 255, 170, 0.2);
}

.logo h1 {
    font-size: 1.8rem;
    font-weight: 800;
    background: linear-gradient(135deg, #b0ffd9, #2affb6);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    letter-spacing: -0.02em;
}

.logo span {
    font-size: 0.9rem;
    color: #8affce;
    display: block;
    font-weight: 400;
}

.nav-links a {
    color: #ccf4e6;
    text-decoration: none;
    margin-left: 2rem;
    font-weight: 500;
    transition: 0.3s;
    border-bottom: 1px solid transparent;
    padding-bottom: 4px;
}

.nav-links a:hover {
    color: #2effbc;
    border-bottom-color: #2effbc;
    text-shadow: 0 0 4px #1effaa;
}

/* Hero Section */
.hero {
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 3rem 0;
}

.hero-badge {
    background: rgba(0, 255, 170, 0.12);
    backdrop-filter: blur(6px);
    padding: 0.4rem 1.2rem;
    border-radius: 40px;
    font-size: 0.85rem;
    font-weight: 500;
    letter-spacing: 1px;
    color: #b0ffe3;
    border: 1px solid rgba(46, 255, 188, 0.4);
    margin-bottom: 1.8rem;
    display: inline-block;
}

.hero h1 {
    font-size: 3.7rem;
    font-weight: 800;
    max-width: 900px;
    line-height: 1.2;
    background: linear-gradient(135deg, #FFFFFF, #b3ffe0);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    margin-bottom: 1.5rem;
}

.hero p {
    font-size: 1.2rem;
    color: #c9e9df;
    max-width: 700px;
    margin-bottom: 2rem;
}

/* Botões */
.btn-group {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
}

.btn-primary {
    background: linear-gradient(95deg, #0c6b4b, #15b87e);
    border: none;
    padding: 0.9rem 2rem;
    border-radius: 60px;
    font-weight: 700;
    font-size: 1rem;
    color: #fff;
    cursor: pointer;
    transition: 0.2s;
    box-shadow: 0 0 12px rgba(21, 184, 126, 0.3);
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
}

.btn-primary:hover {
    transform: scale(1.02);
    box-shadow: 0 0 20px rgba(46, 255, 188, 0.5);
}

.btn-outline {
    background: transparent;
    border: 1px solid #30e6a8;
    padding: 0.9rem 2rem;
    border-radius: 60px;
    font-weight: 600;
    color: #baffea;
    transition: 0.2s;
    cursor: pointer;
    backdrop-filter: blur(8px);
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
}

.btn-outline:hover {
    background: rgba(46, 255, 188, 0.1);
    box-shadow: 0 0 12px rgba(46, 255, 188, 0.2);
    border-color: #7effce;
}

/* Seções gerais */
section {
    padding: 5rem 0;
    border-bottom: 1px solid rgba(0, 255, 170, 0.08);
}

.section-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    text-align: center;
    background: linear-gradient(120deg, #fff, #7effce);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.section-sub {
    text-align: center;
    color: #8aa9a2;
    margin-bottom: 3.5rem;
    font-size: 1.1rem;
}

/* Cards futuristas */
.cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.card-future {
    background: rgba(10, 25, 28, 0.55);
    backdrop-filter: blur(12px);
    border-radius: 36px;
    padding: 2rem 1.8rem;
    border: 1px solid rgba(46, 255, 170, 0.2);
    transition: all 0.3s ease;
    box-shadow: 0 20px 35px -15px rgba(0,0,0,0.5);
}

.card-future:hover {
    border-color: #2effbc;
    transform: translateY(-6px);
    background: rgba(15, 40, 40, 0.7);
    box-shadow: 0 25px 40px -12px rgba(0, 230, 150, 0.2);
}

.card-icon {
    font-size: 2.8rem;
    color: #2effbc;
    margin-bottom: 1rem;
}

.card-future h3 {
    font-size: 1.6rem;
    margin-bottom: 0.8rem;
    font-weight: 600;
}

.card-future p {
    color: #cbdcd6;
    line-height: 1.5;
}

/* Estatísticas de equilíbrio */
.equilibrium-stats {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2rem;
    background: rgba(0, 20, 15, 0.6);
    border-radius: 48px;
    padding: 2rem 2rem;
    backdrop-filter: blur(8px);
    border: 1px solid rgba(0, 255, 170, 0.25);
    margin-top: 1rem;
}

.stat-item {
    flex: 1;
    text-align: center;
}

.stat-number {
    font-size: 2.8rem;
    font-weight: 800;
    color: #6effc5;
    display: block;
    font-family: monospace;
}

/* Inovação */
.innovation {
    display: flex;
    flex-wrap: wrap;
    gap: 2.5rem;
    align-items: center;
}

.innovation-text {
    flex: 1;
}

.innovation-text h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
}

.innovation-text p {
    margin-bottom: 1.2rem;
    color: #cde9e1;
}

.tech-badge {
    display: inline-block;
    background: #122e27;
    padding: 0.3rem 1rem;
    border-radius: 40px;
    font-size: 0.8rem;
    margin-right: 0.8rem;
    margin-top: 0.5rem;
    border-left: 3px solid #1effaa;
}

.innovation-img {
    flex: 1;
    text-align: center;
}

.glass-sphere {
    background: radial-gradient(circle at 30% 30%, rgba(46, 255, 170, 0.2), rgba(0, 0, 0, 0.6));
    width: 100%;
    max-width: 300px;
    height: auto;
    aspect-ratio: 1/1;
    border-radius: 50%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(8px);
    border: 1px solid rgba(0,255,170,0.5);
    box-shadow: 0 0 40px rgba(0,255,170,0.3);
}

.glass-sphere .material-symbols-outlined {
    font-size: 7rem;
    color: #befff0;
}

/* Seção de conscientização ambiental */
.awareness-section {
    background: linear-gradient(135deg, rgba(0, 40, 35, 0.8), rgba(0, 20, 18, 0.9));
    border-radius: 48px;
    padding: 3rem;
    margin: 2rem 0;
    border: 1px solid rgba(46, 255, 188, 0.3);
    backdrop-filter: blur(8px);
}

.awareness-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.awareness-card {
    background: rgba(10, 35, 32, 0.6);
    border-radius: 28px;
    padding: 1.8rem;
    text-align: center;
    transition: 0.3s;
    border: 1px solid rgba(46, 255, 188, 0.2);
}

.awareness-card:hover {
    border-color: #2effbc;
    transform: translateY(-4px);
}

.awareness-icon {
    font-size: 3rem;
    color: #5effc0;
    margin-bottom: 1rem;
}

.awareness-card h4 {
    font-size: 1.4rem;
    margin-bottom: 0.8rem;
}

.awareness-card p {
    color: #b8dfd4;
    font-size: 0.95rem;
}

.fact-highlight {
    background: rgba(0, 255, 170, 0.1);
    border-left: 4px solid #2effbc;
    padding: 1.2rem;
    border-radius: 20px;
    margin: 1.5rem 0;
    font-style: italic;
}

/* CTA Section */
.cta-section {
    text-align: center;
    padding: 4rem 1rem;
    background: linear-gradient(145deg, rgba(0, 30, 25, 0.6), rgba(0, 10, 8, 0.8));
    border-radius: 60px;
    margin: 3rem 0;
    backdrop-filter: blur(12px);
    border: 1px solid rgba(0, 255, 170, 0.3);
}

/* Footer */
footer {
    padding: 2rem 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1.5rem;
    color: #6d8a81;
    font-size: 0.85rem;
    border-top: 1px solid rgba(0,255,170,0.1);
    align-items: center;
}

.credits {
    font-family: 'Inter', monospace;
    letter-spacing: 0.5px;
    background: rgba(0, 0, 0, 0.5);
    padding: 0.2rem 0.8rem;
    border-radius: 20px;
    border-left: 2px solid #2effbc;
}

.social-icons {
    display: flex;
    gap: 1.2rem;
    align-items: center;
}

.social-icon {
    color: #8aa9a2;
    font-size: 1.6rem;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    background: rgba(46, 255, 170, 0.1);
    width: 44px;
    height: 44px;
    border-radius: 50%;
    transition: 0.3s;
}

.social-icon:hover {
    color: #2effbc;
    transform: translateY(-3px) scale(1.05);
    background: rgba(46, 255, 170, 0.25);
    box-shadow: 0 0 16px rgba(46, 255, 188, 0.5);
}

.footer-left {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.footer-right {
    display: flex;
    gap: 1.8rem;
    align-items: center;
    flex-wrap: wrap;
}

/* Responsividade */
@media (max-width: 800px) {
    .container {
        padding: 0 1.5rem;
    }
    .hero h1 {
        font-size: 2.4rem;
    }
    .navbar {
        flex-direction: column;
        gap: 1rem;
    }
    .nav-links a {
        margin: 0 1rem;
    }
    .section-title {
        font-size: 2rem;
    }
    .awareness-section {
        padding: 1.8rem;
    }
    footer {
        flex-direction: column;
        text-align: center;
        gap: 1.2rem;
    }
    .footer-right {
        justify-content: center;
    }
    .social-icons {
        justify-content: center;
    }
}
