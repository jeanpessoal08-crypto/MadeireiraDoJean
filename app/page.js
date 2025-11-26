function Home() {
  return (
    <div>
      <style>{`
        /* Reset básico */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: "Poppins", sans-serif;
          background-color: #121212; /* preto quase puro */
          color: white;
          overflow-x: hidden;
        }

        /* Hero Section - Estilo da imagem */
        .hero {
          height: 100vh;
          width: 100%;
          background: linear-gradient(rgba(18, 18, 18, 0.9), rgba(18, 18, 18, 0.9)), 
                      url("https://images.unsplash.com/photo-1605733513597-4c8e3e5a9d8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80");
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          position: left;
          overflow: hidden;
        }

        /* Texto central */
        .hero-content {
          text-align: center;
          z-index: 10;
          max-width: 800px;
          padding: 0 20px;
        }

        .hero-content .tag {
          font-size: 1rem;
          letter-spacing: 2px;
          color: #CCCCCC;
          margin-bottom: 10px;
          font-weight: 300;
        }

        .hero-content h1 {
          font-size: 3.5rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 20px;
          color: white;
          text-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }

        .hero-content p {
          font-size: 1.2rem;
          color: #EEEEEE;
          margin-bottom: 30px;
          line-height: 1.6;
        }

        .btn {
          background: white;
          color: #333;
          padding: 14px 32px;
          border: none;
          border-radius: 6px;
          font-size: 1.1rem;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 10px rgba(0,0,0,0.3);
          text-decoration: none;
          display: inline-block;
        }

        .btn:hover {
          background: #F5F5F5;
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(0,0,0,0.4);
        }

        /* Elementos decorativos (vasos/madeiras) */
        .decor {
          position: absolute;
          z-index: 1;
          opacity: 0.8;
        }

        .decor-left {
          top: 20%;
          left: 5%;
          transform: rotate(-5deg);
        }

        .decor-right {
          bottom: 10%;
          right: 5%;
          transform: rotate(5deg);
        }

        .decor img {
          max-width: 200px;
          height: auto;
          filter: brightness(0.9) contrast(1.1);
        }

        /* Seção de Destaques (opcional) */
        .highlights {
          padding: 70px 20px;
          background: #1A1A1A;
          text-align: center;
        }

        .highlights h2 {
          font-size: 2.2rem;
          margin-bottom: 40px;
          color: white;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .card {
          background: #2D2D2D;
          border-radius: 14px;
          box-shadow: 0 6px 15px rgba(0,0,0,0.3);
          overflow: hidden;
          transition: transform 0.3s, box-shadow 0.3s;
          padding: 25px 20px;
        }

        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.5);
        }

        .card-icon {
          font-size: 3rem;
          color: #BDBDBD;
          margin-bottom: 15px;
        }

        .card h3 {
          font-size: 1.5rem;
          margin: 15px 0 12px;
          color: white;
        }

        .card p {
          font-size: 1rem;
          color: #BBBBBB;
          line-height: 1.6;
        }

        /* Rodapé */
        footer {
          background: #121212;
          color: #AAAAAA;
          text-align: center;
          padding: 25px;
          margin-top: 50px;
          font-size: 0.9rem;
        }
      `}</style>

      {/* Hero Section */}
      <div className="hero">
        {/* Elementos decorativos (imagens de madeira/tábuas) */}
        <div className="decor decor-left">
          <img src="https://media.istockphoto.com/id/1429624928/pt/foto/log-trunks-pile-the-logging-timber-forest-wood-industry.jpg?s=612x612&w=0&k=20&c=MwoucwTfCHAgDnHYO7-j7hMhUsQjPQURf2BgrMPB5BU="></img>
           </div>

        <div className="decor decor-right">
          <img src="https://paranawood.com.br/wp-content/uploads/2020/10/IMG_3986-2000x1000.jpg" ></img></div>

        {/* Conteúdo central */}
        <div className="hero-content">
          <div className="tag">MADEIREIRA EUCALIPTUS</div>
          <h1>Líder em qualidade de madeira</h1>
          <p>Do corte à entrega, com respeito à floresta e ao seu projeto.</p>
          <a href="/produto" className="btn">EXPLORAR PRODUTOS</a>
        </div>
      </div>

      {/* Seção de Destaques */}
      <section className="highlights">
        <h2>✨ Por que escolher a Madeireira J?</h2>
        <div className="cards-grid">
          <div className="card">
            <div className="card-icon">🌲</div>
            <h3>Origem Sustentável</h3>
            <p>Trabalhamos apenas com madeira de reflorestamento e fornecedores certificados.</p>
          </div>

          <div className="card">
            <div className="card-icon">📏</div>
            <h3>Medidas Personalizadas</h3>
            <p>Corte sob demanda: tábuas, vigas, ripas e mais, no tamanho que você precisa.</p>
          </div>

          <div className="card">
            <div className="card-icon">🚚</div>
            <h3>Entrega Rápida</h3>
            <p>Entregamos em toda a região com agilidade e cuidado com sua carga.</p>
          </div>
        </div>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Madeireira J — Construindo o futuro com raízes sólidas.</p>
      </footer>
    </div>
  );
}

export default Home;