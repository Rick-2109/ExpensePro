var despesas = [];
var chaveDespesas = 'expensepro-expenses';
var chaveExemplos = 'expensepro-exemplos';

function dataDaDespesa(diasAtras) {
  var data = new Date();
  data.setDate(data.getDate() - diasAtras);
  return data.getFullYear() + '-' +
    String(data.getMonth() + 1).padStart(2, '0') + '-' +
    String(data.getDate()).padStart(2, '0');
}

if (localStorage.getItem(chaveExemplos) !== 'sim') {
  despesas = [
    { consultor: 'Gustavo', descricao: 'Corrida de táxi para reunião', categoria: 'Transporte', valor: 86.40, data: dataDaDespesa(1), observacoes: 'Visita a cliente' },
    { consultor: 'Ana', descricao: 'Diária de hotel', categoria: 'Hospedagem', valor: 480, data: dataDaDespesa(3), observacoes: 'Viagem de trabalho' },
    { consultor: 'Rafael', descricao: 'Almoço com cliente', categoria: 'Alimentação', valor: 72.50, data: dataDaDespesa(2), observacoes: '' },
    { consultor: 'Gustavo', descricao: 'Material para apresentação', categoria: 'Materiais', valor: 135.90, data: dataDaDespesa(5), observacoes: '' }
  ];

  localStorage.setItem(chaveDespesas, JSON.stringify(despesas));
  localStorage.setItem(chaveExemplos, 'sim');
} else {
  despesas = JSON.parse(localStorage.getItem(chaveDespesas) || '[]');
}

function salvarDespesas() {
  localStorage.setItem(chaveDespesas, JSON.stringify(despesas));
}
