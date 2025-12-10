import { Fornecedor } from "../../database/tables";
import "../css/tabelaCliente.css";
async function ListagemFornecedores() {
  const fornecedores = await Fornecedor.findAll();

  return (
    <div>
      <h1>Fornecedores</h1>
      <a href="/fornecedor/novo"> + Cadastrar um Fornecedor</a>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Razão Social</th>
            <th>CNPJ</th>
            <th>Email</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>
          {fornecedores.map(forn => (
            <tr key={forn.id}>
              <td>{forn.id}</td>
              <td>{forn.razao_social}</td>
              <td>{forn.cnpj}</td>
              <td>{forn.email}</td>
              <td>{forn.telefone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListagemFornecedores;