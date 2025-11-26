import { Funcionario } from "../../database/tables";
import "../css/tabelaCliente.css";
async function ListagemFuncionarios() {
  const funcionarios = await Funcionario.findAll();

  return (
    <div>
      <h1>Funcionários</h1>
      <a href="/funcionario/novo"> + Cadastrar um Funcionário</a>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Cargo</th>
            <th>Turno</th>
          </tr>
        </thead>
        <tbody>
          {funcionarios.map(func => (
            <tr key={func.id}>
              <td>{func.id}</td>
              <td>{func.nome}</td>
              <td>{func.cargo}</td>
              <td>{func.turno}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListagemFuncionarios;