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
  { id: 2007, cliente: '    gabriela sousa  ', total: 120.00, status: 'Entregue', data: '2025-10-29' }, // BUG: Nome com formatação errada
  { id: "2008", cliente: 'Heitor Alves', total: 75.20, status: 'Enviado', data: '2025-11-02' }  // BUG: ID como string
];

// ===================================================================
// FUNÇÕES EXISTENTES (COM BUGS)
// ===================================================================

/**
 * BUGFIX-01: Esta função deveria encontrar um pedido pelo ID.
 * Ela não lida com o ID "2008" (string).
 */
function buscarPedidoPorId(idDesejado) {
  try {
    const pedidoEncontrado = baseDePedidos.find((pedido) => {
      return Number(pedido.id) == Number(idDesejado);
    });

    if (pedidoEncontrado) {
      console.log("Pedido encontrado:", pedidoEncontrado);
    } else {
      throw new Error(`ERRO: Pedido não encontrado.`);
    }
  } catch (erro) {
    console.log(`Entrada não corresponde a nenhum pedido. `, erro.message);
  }
}

/**
 * BUGFIX-02: Esta função deveria listar pedidos de um status, mas está quebrada.
 */
function listarPedidosPorStatus(statusDesejado) {
  console.log(`\nBuscando pedidos com status: ${statusDesejado}...`);  
  const pedidosFiltrados = baseDePedidos.filter((pedido) => {
    return pedido.status === "Entregue"; // Está fixo!
  });
  console.log(pedidosFiltrados);
}

function calcularTotalDeVendas(pedidos) {
    return pedidos
        .filter(pedido => pedido.status === "Entregue")
        .reduce((acum, pedido) => {
            const v = Number(pedido.valor ?? pedido.preco ?? pedido.total ?? 0);
            return acum + v;
        }, 0);
}

// ===================================================================
// FUNÇÕES FALTANTES (FEATURES PARA VOCÊS CRIAREM)
// ===================================================================

// FEATURE-03: calcularTotalDeVendas()
// Deve usar .filter() para pegar pedidos 'Entregue' e .reduce()
// para somar o 'total' de todos eles. Deve retornar um número.
function calcularTotalDeVendas() {
  const pedidosEntregues = baseDePedidos.filter(pedido => pedido.status === 'Entregue');
  const totalDeVendas = pedidosEntregues.reduce((soma, pedido) => soma += pedido.total, 0);

  return totalDeVendas;
}

function gerarResumoDePedidos() {
  const resumo = baseDePedidos.map((pedido) => {
    return `ID: ${pedido.id} - Cliente: ${pedido.cliente} - Total: R$ ${pedido.total.toFixed(2)}`;
  });
  return resumo;
}

function somarPedidosPendentes() {
  const pedidosPendentes = baseDePedidos.filter(pedido => {
    return pedido.status === 'Pendente'
  });

  const totalSoma = pedidosPendentes.reduce((acumulador , pedidoAtual) => {
    return acumulador + pedidoAtual.total;
  }, 0)

  return totalSoma;
}

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
// aaa(Conflita com BUGFIX-13)

// FEATURE-10: encontrarPedidoMaisBarato()
// Deve usar .reduce() para varrer o array e retornar
// o OBJETO completo do pedido com o 'total' mais baixo.

function encontrarPedidoMaisBarato() {
  return baseDePedidos.reduce((pedidoMaisBarato, pedidoAtual) => {
    // Se ainda não existe um "menor", o primeiro vira o menor
    if (!pedidoMaisBarato) return pedidoAtual;

    // Compara o total atual com o menor total já encontrado
    return (pedidoAtual.total < pedidoMaisBarato.total)
      ? pedidoAtual
      : pedidoMaisBarato;
  }, null);
}

// FEATURE-11: listarPedidosRecentes(dias)
// Deve usar .filter() e o objeto 'new Date()'
// para retornar pedidos feitos nos últimos 'dias' (ex: 7 dias).
// Dica: new Date(pedido.data)

function listarPedidosRecentes(dias) {
  const hoje = new Date();

  const pedidosRecentes = baseDePedidos.filter(pedido => {
    const dataPedido = new Date(pedido.data);

    const diferencaMes = hoje - dataPedido;
    const msParaDia = 1000 * 60 * 60 * 24;
    const diferencaDias = diferencaMes / msParaDia;

    return diferencaDias <= dias;
  });

  return pedidosRecentes;
}

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
// ÁREA DE TESTES (Adicione suas chamadas de função aqui para testar)]
// ===================================================================

// Teste do BUGFIX-02
listarPedidosPorStatus("Pendente");

// Teste do BUGFIX-01
buscarPedidoPorId(2003);


//TESTE SILAS PR
