import { ItemVenda, Venda, Produto } from "../../database/tables";
import "../css/tabelaCliente.css";

async function ListagemItemVenda() {
  // JOIN: ItemVenda -> Produto + Venda
  const itens = await ItemVenda.findAll({
    include: [
      { model: Produto, attributes: ["descricao", "preco"] },
      { model: Venda, attributes: ["data"] }
    ]
  });

  return (
    <div>
      <h1>Itens da Venda</h1>
      <a href="/itemVenda/novo"> + Adicionar Item de Venda</a>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Venda (Data)</th>
            <th>Produto</th>
            <th>Preço Unitário (R$)</th>
            <th>Quantidade</th>
            <th>Valor Total (R$)</th>
          </tr>
        </thead>

        <tbody>
          {itens.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>

              <td>
                {item.Venda ? item.Venda.data : "—"}
              </td>

              <td>
                {item.Produto ? item.Produto.descricao : "—"}
              </td>

              <td>
                {item.Produto ? item.Produto.preco : "—"}
              </td>

              <td>{item.quantidade}</td>

              <td>
                {(item.valor * item.quantidade).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListagemItemVenda;
