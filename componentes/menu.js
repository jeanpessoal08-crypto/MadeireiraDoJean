// app/componentes/menu.js

export default function Menu() {
  const estiloMenu = {
    backgroundColor: '#5D4037', // marrom escuro (madeira)
    padding: '1rem 2rem',
    display: 'flex',
    gap: '1.5rem',
    flexWrap: 'wrap',
    alignItems: 'center',
    boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
  };

  const estiloLink = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    transition: 'background 0.3s',
  };

  const estiloLogo = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginRight: '2rem',
    color: '#FFD54F', // dourado claro (toque de destaque)
  };

  return (
    <nav style={estiloMenu}>
      <span style={estiloLogo}>🪵 Madeireira J</span>
      <a href="/cliente" style={estiloLink}>Clientes</a>
      <a href="/funcionario" style={estiloLink}>Funcionários</a>
      <a href="/fornecedor" style={estiloLink}>Fornecedores</a>
      <a href="/produto" style={estiloLink}>Produtos</a>
      <a href="/venda" style={estiloLink}>Vendas</a>
    </nav>
  );
}