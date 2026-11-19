var emailInput = document.getElementById('emailInput');
var senhaInput = document.getElementById('senhaInput');
var enviar = document.getElementById('enviarBtn');
enviar.addEventListener('click' , function() {
  var email = emailInput.value;
  var senha = senhaInput.value;

  if (
    (email === 'gustavo34@gexpensepro.com' && senha === '1235') ||
    (email === 'marcia@expensepro.com' && senha === '1236') ||
    (email === 'henrique@expensepro.com' && senha === '1237')
  ) {
    window.location.href = "principal.html";
  } else if (
    email !== 'gustavo34@expensepro.com' &&
    email !== 'marcia@expensepro.com' &&
    email !== 'henrique@expensepro.com' &&
    (senha === '1235' || senha === '1236' || senha === '1237')
  ) {
    alert('Email incorreto!');
  } else if (
    (email === 'gustavo34@expensepro.com' && senha !== '1235') ||
    (email === 'marcia@expensepro.com' && senha !== '1236') ||
    (email === 'henrique@expensepro.com' && senha !== '1237')
  ) {
    alert('Senha incorreta!');
  } else {
    alert('Senha e email incorretos!');
  }
})
