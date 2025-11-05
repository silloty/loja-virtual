// ===================================================================
// SISTEMA DE PEDIDOS - LOJA VIRTUAL (HOS-JS)
// ===================================================================
// Sua missão é consertar bugs e adicionar features a este sistema.
// Lembre-se: CRIE UMA BRANCH ANTES DE COMEÇAR!

const baseDePedidos = [
  { id: 2001, cliente: 'Ana Silva', total: 150.50, status: 'Pendente', data: '2025-11-04' },
  { id: 2002, cliente: 'Bruno Costa', total: 89.90, status: 'Entregue', data: '2025-10-30' },
  { id: 2003, cliente: 'Carla Dias', total: 230.00, status: 'Enviado', data: '2025-11-05' },
  { id: 2004, cliente: 'Daniel Moreira', total: 45.00, status: 'Pendente', data: '2025-11-01' },
  { id: 2005, cliente: 'Elisa Fernandes', total: 320.00, status: 'Entregue', data: '2025-11-03' },
  { id: 2006, cliente: 'Felipe Guedes', total: 99.90, status: 'Cancelado', data: '2025-11-05' },
  { id: 2007, cliente: '   gabriela sousa  ', total: 120.00, status: 'Entregue', data: '2025-10-29' }, // BUG: Nome com formatação errada
  { id: "2008", cliente: 'Heitor Alves', total: 75.20, status: 'Enviado', data: '2025-11-02' }  // BUG: ID como string
];

// ===================================================================
// FUNÇÕES EXISTENTES (COM BUGS)
// ===================================================================

/**
 * BUGFIX-01: Esta função deveria encontrar um pedido pelo ID.
 * Ela não está usando try...catch e não lida com o ID "2008" (string).
 */
function buscarPedidoPorId(idDesejado) {
  // BUG: Não tem try...catch
  const pedidoEncontrado = baseDePedidos.find((pedido) => {
    return pedido.id === idDesejado; // BUG: Falha com "2008"
  });

  if (pedidoEncontrado) {
    console.log("Pedido encontrado:", pedidoEncontrado);
  } else {
    // BUG: Deveria lançar 'throw new Error'
    console.log("ERRO: Pedido não encontrado.");
  }
}

/**
 * BUGFIX-02: Esta função deveria listar pedidos de um status, mas está quebrada.
 */
function listarPedidosPorStatus(statusDesejado) {
  console.log(`\nBuscando pedidos com status: ${statusDesejado}...`);
  // BUG: A lógica do filtro está errada, não usa o parâmetro
  const pedidosFiltrados = baseDePedidos.filter((pedido) => {
    return pedido.status === 'Entregue'; // Está fixo!
  });
  console.log(pedidosFiltrados);
}

// ===================================================================
// FUNÇÕES FALTANTES (FEATURES PARA VOCÊS CRIAREM)
// ===================================================================

// FEATURE-03: calcularTotalDeVendas()
// Deve usar .filter() para pegar pedidos 'Entregue' e .reduce()
// para somar o 'total' de todos eles. Deve retornar um número.

// FEATURE-04: gerarResumoDePedidos()
// Deve usar .map() para retornar um NOVO array de strings
// com o formato: "ID: [id] - Cliente: [cliente] - Total: R$ [total]"
// Ex: "ID: 2001 - Cliente: Ana Silva - Total: R$ 150.50"

// FEATURE-05: somarPedidosPendentes()
// Deve usar .filter() e .reduce() para somar o 'total'
// apenas dos pedidos com status 'Pendente'.

// FEATURE-06: atualizarStatus(idPedido, novoStatus)
// Deve usar .find() para encontrar o pedido pelo ID. Se encontrar,
// deve atualizar o 'status' dele para o 'novoStatus' e
// retornar o objeto do pedido atualizado.

// FEATURE-07: encontrarPedidoMaisCaro()
// Deve usar .reduce() para varrer o array e retornar
// o OBJETO completo do pedido com o 'total' mais alto.

// FEATURE-08: listarClientes()
// Deve usar .map() para retornar um array
// contendo APENAS o nome (cliente) de todos os pedidos.

// FEATURE-09: normalizarNomesClientes()
// Deve usar .forEach() (ou .map()) para corrigir o nome
// do cliente no pedido "2007". Deve usar .trim() e
// capitalizar o nome (ex: "Gabriela Sousa").
// (Conflita com BUGFIX-13)

// FEATURE-10: encontrarPedidoMaisBarato()
// Deve usar .reduce() para varrer o array e retornar
// o OBJETO completo do pedido com o 'total' mais baixo.

// FEATURE-11: listarPedidosRecentes(dias)
// Deve usar .filter() e o objeto 'new Date()'
// para retornar pedidos feitos nos últimos 'dias' (ex: 7 dias).
// Dica: new Date(pedido.data)

// FEATURE-12: contarStatusDosPedidos()
// (Desafio!) Deve usar .reduce() para criar um objeto
// que conta quantos pedidos existem em CADA status.
// Ex: { Pendente: 2, Entregue: 3, Enviado: 2, Cancelado: 1 }

// FEATURE-13: alterarTotalDoCliente(nomeCliente, novoTotal)
// Deve usar .find() para encontrar o pedido pelo 'cliente' e
// atualizar o 'total' desse pedido.
// (Conflita com FEATURE-09)

// BUGFIX-14: A função 'buscarPedidoPorId' não está sendo
// chamada para testes. Adicione chamadas de teste para o ID 2008 e
// para um ID que não existe (9999) na área de testes.

// BUGFIX-15: A função 'buscarPorId' (BUG-01) precisa ser
// corrigida para usar 'try...catch' e 'throw new Error'.
// (Conflito direto e intencional com BUGFIX-01)

// ===================================================================
// ÁREA DE TESTES (Adicione suas chamadas de função aqui para testar)
// ===================================================================

// Teste do BUGFIX-02
listarPedidosPorStatus("Pendente");

// Teste do BUGFIX-01
buscarPedidoPorId(2003); // Deve funcionar