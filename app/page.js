 import "../app/css/telainicial.css";
function Home() {

  return (
    <div>


<style>{`
/* Cores do Tema Madeireira */
:root {
  --cor-madeira-escura: #4e342e; /* Marrom escuro */
  --cor-verde-musgo:rgb(7, 202, 56); /* Verde para destaque */
  --cor-fundo-claro: #f5f5dc; /* Bege claro (para texto/fundo) */
  --cor-fundo-principal: #1a1a1a; /* Fundo escuro para contraste */
  --cor-dourado-destaque:rgb(114, 187, 53); /* Dourado/Amarelo */
}

/* Reset básico */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Georgia", serif;
  background-color: var(--cor-fundo-principal); 
  color: white;
  overflow-x: hidden;
}

/* --- Hero Section (Fundo com a Imagem Fornecida) --- */
.hero {
  height: 100vh;
  width: 100%;
  
  /* Usa a URL que você forneceu e aplica a sobreposição rústica */
  background: linear-gradient(
    rgba(0, 2, 1, 0.75),  /* Marrom escuro na sobreposição (Mais escuro) */
    rgba(78, 52, 46, 0.7)   /* Marrom escuro na sobreposição (Um pouco mais claro) */
  ), 
  url("https://www.cbimadeiras.com.br/arquivo/galeria_foto/10.jpg"); 

  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* Efeito Parallax suave */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

/* Texto central */
.hero-content {
  text-align: center;
  z-index: 10;
  max-width: 1000px;
  padding: 0 40px;
}

.hero-content .tag {
  font-size: 1rem;
  letter-spacing: 3px;
  color: var(--cor-verde-musgo);
  margin-bottom: 10px;
  font-weight: bold;
}

.hero-content h1 {
  font-size: 3.8rem;
  font-weight: 900;
  line-height: 1.2;
  margin-bottom: 20px;
  color: var(--cor-fundo-claro);
  text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
}

.hero-content p {
  font-size: 1.3rem;
  color: #dddddd;
  margin-bottom: 40px;
  line-height: 1.6;
}

/* Botão Principal */
.btn {
  background: var(--cor-verde-musgo);
  color: var(--cor-texto-claro);
  padding: 16px 36px;
  border: 2px solid var(--cor-fundo-claro);
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 6px 12px rgba(0,0,0,0.4);
  text-decoration: none;
  display: inline-block;
}

.btn:hover {
  background: #689f38;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.6);
}


/* --- Seção de Destaques --- */
.highlights {
  padding: 80px 20px;
  background: #252525;
  text-align: center;
}

.highlights h2 {
  font-size: 2.5rem;
  margin-bottom: 50px;
  color: var(--cor-fundo-claro);
  border-bottom: 3px solid var(--cor-madeira-escura);
  display: inline-block;
  padding-bottom: 10px;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
}

.card {
  background: var(--cor-madeira-escura);
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.5);
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  padding: 30px 25px;
  border: 2px solid var(--cor-verde-musgo);
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.7);
  background-color: #5d4037;
}

.card-icon {
  font-size: 4rem;
  color: var(--cor-dourado-destaque);
  margin-bottom: 15px;
}

.card h3 {
  font-size: 1.6rem;
  margin: 15px 0 10px;
  color: var(--cor-fundo-claro);
}

.card p {
  font-size: 1.05rem;
  color: #CCCCCC;
  line-height: 1.6;
}

/* Rodapé */
footer {
  background: #0d0d0d;
  color: #777777;
  text-align: center;
  padding: 30px;
  font-size: 0.9rem;
  margin-top: 50px;
  border-top: 1px solid var(--cor-madeira-escura);
}
  /* --- Seção de Contato --- */
.contact {
  background: #1f1f1f;
  padding: 80px 20px;
  text-align: center;
  border-top: 2px solid var(--cor-madeira-escura);
}

.contact h2 {
  font-size: 2.4rem;
  color: var(--cor-fundo-claro);
  margin-bottom: 25px;
}

.contact-desc {
  color: #cccccc;
  font-size: 1.2rem;
  max-width: 750px;
  margin: 0 auto 40px auto;
  line-height: 1.6;
}

.contact-info {
  background: #2a2a2a;
  border: 1px solid var(--cor-madeira-escura);
  border-radius: 10px;
  padding: 25px 20px;
  max-width: 500px;
  margin: 0 auto 30px auto;
  color: var(--cor-fundo-claro);
  font-size: 1.1rem;
  line-height: 1.8;
  box-shadow: 0 5px 15px rgba(0,0,0,0.4);
}

.contact-btn {
  display: inline-block;
  background: var(--cor-verde-musgo);
  color: var(--cor-fundo-claro);
  padding: 14px 32px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  border: 2px solid var(--cor-fundo-claro);
  transition: 0.3s;
}

.contact-btn:hover {
  background: #76d153;
  transform: translateY(-3px);
}

`}</style>

      {/* Hero Section */}
      <div className="hero">
        {/* Elementos decorativos (imagens de madeira/tábuas) */}
      
        {/* Conteúdo central */}
        <div className="hero-content">
          <div className="tag">MADEIREIRA DO JEAN</div>
          <h1>Líder em qualidade de madeira</h1>
          <p>Do corte à entrega, com respeito à floresta e ao seu projeto.</p>
          <a href="/ideias" className="btn">EXPLORAR</a>
        </div>
      </div>

{/* Seção de Destaques */}
<section className="highlights">
  <h2>Por que escolher a Madeireira do Jean?</h2>
  <div className="cards-grid">
    <div className="card">
      <div className="card-icon">
        <img src="https://potencialflorestal.com.br/wp-content/uploads/2021/03/mitos-e-verdades-capa.png" alt="Origem Sustentável" />
      </div>
      <h3>Origem Sustentável</h3>
      <p>Trabalhamos apenas com madeira de reflorestamento e fornecedores certificados.</p>
    </div>

    <div className="card">
      <div className="card-icon">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZKPFU9KDRHGBlxXEJVqqjhadXm_0SLgts7Q&s" alt="Medidas Personalizadas" />
      </div>
      <h3>Medidas Personalizadas</h3>
      <p>Corte sob demanda: tábuas, vigas, ripas e mais, no tamanho que você precisa.</p>
    </div>

    <div className="card">
      <div className="card-icon">
        <img src="https://thumbs.dreamstime.com/b/caminh%C3%A3o-carregado-com-os-feixes-de-madeira-21624169.jpg" alt="Entrega Rápida" />
      </div>
      <h3>Entrega Rápida</h3>
      <p>Entregamos em toda a região com agilidade e cuidado com sua carga.</p>
    </div>
  </div>
</section>
{/* Seção de Contato */}
<section className="contact">
  <h2>Entre em Contato</h2>

  <p className="contact-desc">
    Fale com nossa equipe para solicitações de orçamento, dúvidas sobre materiais, 
    prazos de entrega e suporte técnico especializado. Estamos sempre prontos para ajudar!
  </p>

  <div className="contact-info">
    <p><strong>Telefone:</strong> (33) 99999-9999</p>
    <p><strong>WhatsApp:</strong> (33) 98888-8888</p>
    <p><strong>Email:</strong> madeireiradoJean@gmail.com</p>
  </div>

  <a href="tel:+55(33)998443423" className="contact-btn">Entrar em Contato</a>
</section>

      
    </div>
    
  );
}

export default Home;