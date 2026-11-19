var hoje = new Date();
var mesAtual = hoje.getFullYear() + '-' + String(hoje.getMonth() + 1).padStart(2, '0');

document.getElementById('dataAtual').textContent = new Intl.DateTimeFormat('pt-BR', {
  weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
}).format(hoje);

function atualizarPainel() {
  var despesasDoMes = despesas.filter(function(despesa) {
    return despesa.data.slice(0, 7) === mesAtual;
  });
  var total = despesasDoMes.reduce(function(soma, despesa) {
    return soma + Number(despesa.valor);
  }, 0);

  document.getElementById('totalMes').textContent = total.toLocaleString('pt-BR', {
    style: 'currency', currency: 'BRL'
  });
  var recentes = despesas.slice().sort(function(a, b) {
    return b.data.localeCompare(a.data);
  }).slice(0, 5);
  var tabela = document.getElementById('despesasRecentes');
  tabela.textContent = '';

  recentes.forEach(function(despesa) {
    var linha = tabela.insertRow();
    var valores = [
      despesa.consultor,
      despesa.descricao,
      despesa.categoria,
      Number(despesa.valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
      despesa.data.split('-').reverse().join('/')
    ];

    valores.forEach(function(valor) {
      linha.insertCell().textContent = valor;
    });
  });

  document.getElementById('listaVazia').hidden = recentes.length > 0;
  document.getElementById('tabelaContainer').hidden = recentes.length === 0;
}

atualizarPainel();
