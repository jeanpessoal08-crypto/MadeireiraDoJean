import { Cliente } from "../../database/tables";

async function ListagemClientes() {
  const clientes = await Cliente.findAll();

  return (
    <div>
      <h1>Clientes</h1>
      <a href="/cliente/novo"> + Cadastrar um Cliente</a>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>CPF</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map(cliente => (
            <tr key={cliente.id}>
              <td>{cliente.id}</td>
              <td>{cliente.nome}</td>
              <td>{cliente.cpf}</td>
              <td>{cliente.telefone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListagemClientes;
// novo clone 26-11