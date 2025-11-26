import { Fornecedor } from '../../../database/tables';
import { redirect } from 'next/navigation';

async function insereFornecedor(formData) {
  'use server';
  const dados = {
    razao_social: formData.get('razao_social'),
    cnpj: formData.get('cnpj'),
    email: formData.get('email'),
    telefone: formData.get('telefone')
  };
  await Fornecedor.create(dados);
  redirect('/fornecedor');
}

export default function TelaNovoFornecedor() {
  return (
    <>
      <h2>Novo Fornecedor</h2>
      <form action={insereFornecedor}>
        <label htmlFor="razao_social">Razão Social</label><br />
        <input type="text" name="razao_social" required /><br /><br />

        <label htmlFor="cnpj">CNPJ</label><br />
        <input type="text" name="cnpj" required /><br /><br />

        <label htmlFor="email">Email</label><br />
        <input type="email" name="email" required /><br /><br />

        <label htmlFor="telefone">Telefone</label><br />
        <input type="text" name="telefone" required /><br /><br />

        <button type="submit">Cadastrar</button>
      </form>
    </>
  );
}