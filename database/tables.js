import { DataTypes } from "sequelize";
import mysql from "./mysql.js";

// Fornecedor
const Fornecedor = mysql.define('Fornecedor', {
  razao_social: DataTypes.STRING,
  cnpj: DataTypes.STRING,
  email: DataTypes.STRING,
  telefone: DataTypes.STRING
}, {
  tableName: 'Fornecedor',
  timestamps: false
});

// Cliente
const Cliente = mysql.define('Cliente', {
  nome: DataTypes.STRING,
  cpf: DataTypes.STRING,
  telefone: DataTypes.STRING
}, {
  tableName: 'Cliente',
  timestamps: false
});

// Funcionario
const Funcionario = mysql.define('Funcionario', {
  nome: DataTypes.STRING,
  cargo: DataTypes.STRING,
  turno: DataTypes.STRING
}, {
  tableName: 'Funcionario',
  timestamps: false
});

// Produto
const Produto = mysql.define('Produto', {
  descricao: DataTypes.STRING,
  tipo: DataTypes.STRING,
  preco: DataTypes.DECIMAL(10, 2),
  estoque: DataTypes.INTEGER
}, {
  tableName: 'Produto',
  timestamps: false
});

// Venda
const Venda = mysql.define('Venda', {
  data: DataTypes.DATEONLY
}, {
  tableName: 'Venda',
  timestamps: false
});

// ItemVenda (tabela intermediária)
const ItemVenda = mysql.define('ItemVenda', {
  quantidade: DataTypes.INTEGER,
  valor: DataTypes.DECIMAL(10, 2)
}, {
  tableName: 'ItemVenda',
  timestamps: false
});

// ─── RELACIONAMENTOS ───────────────────────────────

// Fornecedor 1:N Produto
Fornecedor.hasMany(Produto, { foreignKey: 'FornecedorId' });
Produto.belongsTo(Fornecedor, { foreignKey: 'FornecedorId' });

// Cliente 1:N Venda
Cliente.hasMany(Venda, { foreignKey: 'ClienteId' });
Venda.belongsTo(Cliente, { foreignKey: 'ClienteId' });

// Funcionario 1:N Venda
Funcionario.hasMany(Venda, { foreignKey: 'FuncionarioId' });
Venda.belongsTo(Funcionario, { foreignKey: 'FuncionarioId' });

// Venda N:M Produto via ItemVenda
Venda.belongsToMany(Produto, {
  through: ItemVenda,
  foreignKey: 'VendaId',
  otherKey: 'ProdutoId'
});
Produto.belongsToMany(Venda, {
  through: ItemVenda,
  foreignKey: 'ProdutoId',
  otherKey: 'VendaId'
});

// ⚠️ Sincronização (use com cuidado!)
// mysql.sync({ alter: true }); // ou force: true → APAGA DADOS!
// Em produção, prefira migrations ou comentar.

export { Fornecedor, Cliente, Funcionario, Produto, Venda, ItemVenda, mysql };