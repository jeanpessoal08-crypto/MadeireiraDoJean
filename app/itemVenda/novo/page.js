import { ItemVenda, Venda, Produto } from '../../../database/tables';
import { redirect } from 'next/navigation';

async function insereItemVenda(formData) {
  'use server';

  const dados = {
    quantidade: parseInt(formData.get('quantidade'), 10),
    valor: parseFloat(formData.get('valor')),
    VendaId: parseInt(formData.get('vendaId'), 10),
    ProdutoId: parseInt(formData.get('produtoId'), 10)
  };

  await ItemVenda.create(dados);
  redirect('/itemVenda');
}

// Buscar vendas
async function getVendas() {
  'use server';
  return await Venda.findAll();
}

// Buscar produtos
async function getProdutos() {
  'use server';
  return await Produto.findAll();
}

export default async function TelaNovoItemVenda() {
  const vendas = await getVendas();
  const produtos = await getProdutos();

  return (
    <>
      <h2>Novo Item de Venda</h2>

      <form action={insereItemVenda}>
        
        <label htmlFor="vendaId">Venda</label><br />
        <select name="vendaId" required>
          <option value="">Selecione...</option>
          {vendas.map(v => (
            <option key={v.id} value={v.id}>
              Venda #{v.id} — {v.data}
            </option>
          ))}
        </select><br /><br />

        <label htmlFor="produtoId">Produto</label><br />
        <select name="produtoId" required>
          <option value="">Selecione...</option>
          {produtos.map(p => (
            <option key={p.id} value={p.id}>
              {p.descricao} (R${p.preco})
            </option>
          ))}
        </select><br /><br />

        <label htmlFor="quantidade">Quantidade</label><br />
        <input type="number" name="quantidade" min="1" required /><br /><br />

        <label htmlFor="valor">Valor Unitário (R$)</label><br />
        <input type="number" step="0.01" name="valor" required /><br /><br />

        <button type="submit">Cadastrar</button>
      </form>
    </>
  );
}
