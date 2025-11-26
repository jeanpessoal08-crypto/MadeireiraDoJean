import { Venda, Cliente, Funcionario } from '../../../database/tables';
import { redirect } from 'next/navigation';

async function criaVenda(formData) {
  'use server';
  const dados = {
    data: new Date().toISOString().split('T')[0], // data de hoje no formato YYYY-MM-DD
    ClienteId: parseInt(formData.get('clienteId'), 10) || null,
    FuncionarioId: parseInt(formData.get('funcionarioId'), 10) || null
  };
  const novaVenda = await Venda.create(dados);
  redirect(`/venda`); // redireciona para adicionar itens
}

async function getClientes() {
  'use server';
  return await Cliente.findAll();
}

async function getFuncionarios() {
  'use server';
  return await Funcionario.findAll();
}

export default async function TelaNovaVenda() {
  const clientes = await getClientes();
  const funcionarios = await getFuncionarios();

  return (
    <>
      <h2>Nova Venda</h2>
      <form action={criaVenda}>
        <label htmlFor="clienteId">Cliente (opcional)</label><br />
        <select name="clienteId">
          <option value="">Nenhum</option>
          {clientes.map(c => (
            <option key={c.id} value={c.id}>{c.nome} (CPF: {c.cpf})</option>
          ))}
        </select><br /><br />

        <label htmlFor="funcionarioId">Funcionário</label><br />
        <select name="funcionarioId" required>
          <option value="">Selecione...</option>
          {funcionarios.map(f => (
            <option key={f.id} value={f.id}>{f.nome} - {f.cargo}</option>
          ))}
        </select><br /><br />

        <button type="submit">Iniciar Venda</button>
      </form>
    </>
  );
}