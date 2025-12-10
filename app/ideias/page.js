import "../css/ideias.css";

function Ideias() {
  return (
    <div className="ideias-container">

      <h1 className="ideias-title">Inspire-se</h1>
      <p className="ideias-subtitle">
        com formas inteligentes, funcionais e criativas de aplicar nossos produtos em
        projetos residenciais, comerciais e estruturais.
      </p>

      <div className="ideias-grid">

        {/* Card 1 */}
        <div className="ideia-card">
          <img
            src="https://www.analiapisos.com.br/blog/wp-content/uploads/2024/10/545ba38928c6b209929bbde353080c4a.jpeg"
            alt="Painéis de madeira"
          />
          <h3>Painéis Decorativos</h3>
          <p>
            Madeira é ideal para revestimentos internos, trazendo aconchego e estilo para salas,
            quartos e escritórios.
          </p>
        </div>

        {/* Card 2 */}
        <div className="ideia-card">
          <img
            src="https://d1730e2a.delivery.rocketcdn.me/wp-content/uploads/2023/02/qual-a-importancia-do-tratamento-de-madeira-para-deck-externo-730x487.jpg"
            alt="Deck de madeira"
          />
          <h3>Decks Externos</h3>
          <p>
            Utilizada em áreas de piscina e jardins, a madeira cria ambientes elegantes e super
            duráveis quando bem tratada.
          </p>
        </div>

        {/* Card 3 */}
        <div className="ideia-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRISfqRq5KmpnNgzMBPhn16C7MggjGwRYZYfA&s"
            alt="Estruturas de madeira"
          />
          <h3>Estruturas e Construção</h3>
          <p>
            Perfeita para vigas, colunas e suportes estruturais. Forte, sustentável e de longa
            vida útil.
          </p>
        </div>

        {/* Card 4 */}
        <div className="ideia-card">
          <img
            src="https://img.elo7.com.br/product/zoom/529C7AD/mesa-rustica-madeira-jequitiba-3-0mts-2-bancos-10-lugares.jpg"
            alt="Móveis rústicos"
          />
          <h3>Móveis Rústicos</h3>
          <p>
            Muito utilizada em mesas, cadeiras, prateleiras e bancadas robustas com acabamento
            natural.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Ideias;
