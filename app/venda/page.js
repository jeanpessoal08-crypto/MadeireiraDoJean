import { Venda, Cliente, Funcionario } from "../../database/tables";
import "../css/tabelaCliente.css";
async function ListagemVendas() {
  const vendas = await Venda.findAll({
    include: [
      { model: Cliente, attributes: ['nome'] },
      { model: Funcionario, attributes: ['nome'] }
    ]
  });

  return (
    <div>
      <h1>Vendas</h1>
      <a href="/venda/novo"> + Nova Venda</a>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Data</th>
            <th>Cliente</th>
            <th>Funcionário</th>
          </tr>
        </thead>
        <tbody>
          {vendas.map(venda => (
            <tr key={venda.id}>
              <td>{venda.id}</td>
              <td>{venda.data}</td>
              <td>{venda.Cliente ? venda.Cliente.nome : '—'}</td>
              <td>{venda.Funcionario ? venda.Funcionario.nome : '—'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListagemVendas;