import { Cliente } from '../../../database/tables';
import { redirect } from 'next/navigation';

async function insereCliente(formData) {
  'use server';
  const dados = {
    nome: formData.get('nome'),
    cpf: formData.get('cpf'),
    telefone: formData.get('telefone')
  };
  await Cliente.create(dados);
  redirect('/cliente');
}

export default function TelaNovoCliente() {
  return (
    <>
      <h2>Novo Cliente</h2>
      <form action={insereCliente}>
        <label htmlFor="nome">Nome</label><br />
        <input type="text" name="nome" required /><br /><br />

        <label htmlFor="cpf">CPF</label><br />
        <input type="text" name="cpf" required /><br /><br />

        <label htmlFor="telefone">Telefone</label><br />
        <input type="text" name="telefone" required /><br /><br />

        <button type="submit">Cadastrar</button>
      </form>
    </>
  );
}