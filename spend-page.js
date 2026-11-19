var formulario = document.getElementById('despesaForm');

function dataHoje() {
  var hoje = new Date();
  return hoje.getFullYear() + '-' +
    String(hoje.getMonth() + 1).padStart(2, '0') + '-' +
    String(hoje.getDate()).padStart(2, '0');
}

document.getElementById('data').value = dataHoje();

formulario.addEventListener('submit', function(event) {
  event.preventDefault();

  despesas.push({
    descricao: document.getElementById('descricao').value,
    categoria: document.getElementById('categoria').value,
    valor: Number(document.getElementById('valor').value),
    data: document.getElementById('data').value,
    consultor: document.getElementById('consultor').value,
    observacoes: document.getElementById('observacoes').value
  });

  salvarDespesas();
  formulario.reset();
  document.getElementById('data').value = dataHoje();
  document.getElementById('mensagem').textContent = 'Despesa salva com sucesso.';
  mostrarDespesas();
});

function mostrarDespesas() {
  var tabela = document.getElementById('listaDespesas');
  tabela.textContent = '';

  despesas.slice().reverse().forEach(function(despesa) {
    var linha = tabela.insertRow();
    var valores = [
      despesa.consultor,
      despesa.descricao,
      despesa.categoria,
      Number(despesa.valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
      despesa.data.split('-').reverse().join('/'),
      despesa.observacoes || '-'
    ];

    valores.forEach(function(valor) {
      linha.insertCell().textContent = valor;
    });
  });

  document.getElementById('listaVazia').hidden = despesas.length > 0;
  document.getElementById('tabelaContainer').hidden = despesas.length === 0;
}

mostrarDespesas();
