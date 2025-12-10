// app/componentes/menu.js
import "../app/css/menu.css";
export default function Menu() {

  return (
    // Usa a classe CSS 'menu-container' no lugar do estiloMenu
    <div className="menu-container">
      
      
      {/* Usa a classe CSS 'menu-logo' no lugar do estiloLogo */}
      <span className="menu-logo">Madeireira do Jean</span> 
      
      {/* Exemplo de links usando a classe 'menu-link' */}
      <a href="/" className="menu-link">Início</a>
      <a href="/cliente" className="menu-link">Clientes</a>
      <a href="/funcionario" className="menu-link">Funcionários</a>
      <a href="/fornecedor" className="menu-link">Fornecedores</a>
      <a href="/produtos" className="menu-link">Produtos</a>
      <a href="/venda" className="menu-link">Vendas</a>
      <a href="/ideias" className="menu-link">Explorar</a>
      
    </div>
  );
}

