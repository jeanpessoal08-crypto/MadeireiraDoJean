import { Produto, Fornecedor } from '../../../database/tables';
import { redirect } from 'next/navigation';

async function insereProduto(formData) {
  'use server';
  const dados = {
    descricao: formData.get('descricao'),
    tipo: formData.get('tipo'),
    preco: parseFloat(formData.get('preco')),
    estoque: parseInt(formData.get('estoque'), 10),
    FornecedorId: parseInt(formData.get('fornecedorId'), 10)
  };
  await Produto.create(dados);
  redirect('/produtos');
}

// Função para buscar fornecedores (executada no servidor)
async function getFornecedores() {
  'use server';
  return await Fornecedor.findAll();
}

export default async function TelaNovoProduto() {
  const fornecedores = await getFornecedores();

  return (
    <>
      <h2>Novo Produto</h2>
      <form action={insereProduto}>
        <label htmlFor="descricao">Descrição</label><br />
        <input type="text" name="descricao" required /><br /><br />

        <label htmlFor="tipo">Tipo</label><br />
        <input type="text" name="tipo" required /><br /><br />

        <label htmlFor="preco">Preço (R$)</label><br />
        <input type="number" step="0.01" name="preco" required /><br /><br />

        <label htmlFor="estoque">Estoque</label><br />
        <input type="number" name="estoque" required /><br /><br />

        <label htmlFor="fornecedorId">Fornecedor</label><br />
        <select name="fornecedorId" required>
          <option value="">Selecione...</option>
          {fornecedores.map(f => (
            <option key={f.id} value={f.id}>{f.razao_social}</option>
          ))}
        </select><br /><br />

        <button type="submit">Cadastrar</button>
      </form>
    </>
  );
}