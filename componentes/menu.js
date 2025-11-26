// app/componentes/menu.js
import "../app/css/menu.css";
export default function Menu() {
 
  /*return (
    <nav style={menu}>
      <span style={estiloLogo}> Madeireira do Jean</span>
      <a href="/" style={estiloLink}>Home</a>
      <a href="/cliente" style={estiloLink}>Clientes</a>
      <a href="/funcionario" style={estiloLink}>Funcionários</a>
      <a href="/fornecedor" style={estiloLink}>Fornecedores</a>
      <a href="/produto" style={estiloLink}>Produtos</a>
      <a href="/venda" style={estiloLink}>Vendas</a>
    </nav>
  );*/
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
      <a href="/produto" className="menu-link">Produtos</a>
      <a href="/venda" className="menu-link">Vendas</a>
      
    </div>
  );
}

