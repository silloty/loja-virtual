# Quadro de Tarefas - Sistema de Pedidos da Loja Virtual

Bem-vindo à equipe! Nosso novo `sistemaDePedidos.js` precisa de ajuda.

Escolha **UMA** tarefa abaixo (bugfix ou feature) e abra um Pull Request (PR) para resolvê-la.

**Regra de Ouro:** Verifique os Pull Requests já abertos. Se alguém já está trabalhando em uma tarefa, **ESCOLHA OUTRA**. Se o seu PR tiver conflito com a `main`, é sua responsabilidade resolvê-lo.

## Bug Fixes (Consertos Urgentes) 🐞

* **[BUGFIX-01]** A função `buscarPedidoPorId` não lida com o ID "2008" (que é uma string). Ela precisa ser corrigida para encontrar o pedido usando `==` em vez de `===`. **(Conflita com BUGFIX-15 e FEATURE-06)**
* **[BUGFIX-02]** A função `listarPedidosPorStatus` está com o status "chumbado" (fixo) em "Entregue". Ela precisa usar o parâmetro `statusDesejado`.
* **[BUGFIX-14]** A área de testes está incompleta. Adicione chamadas de função no final do arquivo para testar `buscarPedidoPorId(2008)` e `buscarPedidoPorId(9999)`.
* **[BUGFIX-15]** A função `buscarPedidoPorId` não usa `try...catch`. Ela deve usar `try...catch` e lançar (`throw new Error`) um erro se o pedido não for encontrado. **(Conflita com BUGFIX-01 e FEATURE-06)**

## Features (Novas Funções) ✨

* **[FEATURE-03]** Crie a função `calcularTotalDeVendas()`. Ela deve usar `.filter()` (para 'Entregue') e `.reduce()` para somar o `total` de todos eles. Deve retornar um número.
* **[FEATURE-04]** Crie a função `gerarResumoDePedidos()`. Ela deve usar `.map()` para retornar um NOVO array de strings com o formato: `"ID: [id] - Cliente: [cliente] - Total: R$ [total]"`.
* **[FEATURE-05]** Crie a função `somarPedidosPendentes()`. Ela deve usar `.filter()` e `.reduce()` para somar o `total` apenas dos pedidos com status 'Pendente'.
* **[FEATURE-06]** Crie a função `atualizarStatus(idPedido, novoStatus)`. Ela deve usar `.find()`, encontrar o pedido, atualizar seu `status` e retornar o pedido atualizado. **(Conflita com BUGFIX-01 e BUGFIX-15)**
* **[FEATURE-07]** Crie a função `encontrarPedidoMaisCaro()`. Ela deve usar `.reduce()` para retornar o *objeto* completo do pedido com o `total` mais alto.
* **[FEATURE-08]** Crie a função `listarClientes()`. Ela deve usar `.map()` para retornar um array contendo *apenas* o nome (`cliente`) de todos os pedidos.
* **[FEATURE-09]** Crie a função `normalizarNomesClientes()`. Ela deve usar `.forEach()` (ou `.map()`) para corrigir o nome do cliente no pedido 2007 (use `.trim()` e capitalize). **(Conflita com FEATURE-13)**
* **[FEATURE-10]** Crie a função `encontrarPedidoMaisBarato()`. Ela deve usar `.reduce()` para retornar o *objeto* completo do pedido com o `total` mais baixo.
* **[FEATURE-11]** Crie a função `listarPedidosRecentes(dias)`. Ela deve usar `.filter()` e `new Date()` para retornar pedidos feitos nos últimos `dias` (ex: 7 dias).
* **[FEATURE-12]** Crie a função `contarStatusDosPedidos()`. (Desafio!) Ela deve usar `.reduce()` para criar um objeto que conta quantos pedidos existem em CADA status. (Ex: `{ Pendente: 2, Entregue: 3, ... }`).
* **[FEATURE-13]** Crie a função `alterarTotalDoCliente(nomeCliente, novoTotal)`. Deve usar `.find()` para encontrar o pedido pelo `cliente` (ex: '   gabriela sousa  ') e atualizar o `total`. **(Conflita com FEATURE-09)**