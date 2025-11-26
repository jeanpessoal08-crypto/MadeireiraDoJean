import { Funcionario } from '../../../database/tables';
import { redirect } from 'next/navigation';

async function insereFuncionario(formData) {
  'use server';
  const dados = {
    nome: formData.get('nome'),
    cargo: formData.get('cargo'),
    turno: formData.get('turno')
  };
  await Funcionario.create(dados);
  redirect('/funcionario');
}

export default function TelaNovoFuncionario() {
  return (
    <>
      <h2>Novo Funcionário</h2>
      <form action={insereFuncionario}>
        <label htmlFor="nome">Nome</label><br />
        <input type="text" name="nome" required /><br /><br />

        <label htmlFor="cargo">Cargo</label><br />
        <input type="text" name="cargo" required /><br /><br />

        <label htmlFor="turno">Turno</label><br />
        <input type="text" name="turno" required /><br /><br />

        <button type="submit">Cadastrar</button>
      </form>
    </>
  );
}