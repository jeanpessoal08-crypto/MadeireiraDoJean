import { Produto, Fornecedor } from "../../database/tables";
import "../css/tabelaCliente.css";
async function ListagemProdutos() {
  // Inclui o fornecedor junto com o produto (JOIN)
  const produtos = await Produto.findAll({
    include: [{ model: Fornecedor, attributes: ['razao_social'] }]
  });

  return (
    <div>
      <h1>Produtos</h1>
      <a href="/produtos/novo"> + Cadastrar um Produto</a>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Descrição</th>
            <th>Tipo</th>
            <th>Preço (R$)</th>
            <th>Estoque</th>
            <th>Fornecedor</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map(produto => (
            <tr key={produto.id}>
              <td>{produto.id}</td>
              <td>{produto.descricao}</td>
              <td>{produto.tipo}</td>
              <td>{produto.preco}</td>
              <td>{produto.estoque}</td>
              <td>{produto.Fornecedor ? produto.Fornecedor.razao_social : '—'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListagemProdutos;