var res = document.getElementById("resultado")

function btn01() {
  var nome = window.prompt("Qual o nome do funcionario?")
  var salario = Number(window.prompt(`Qual seu salario atual?`))
  var porcentagem = Number(window.prompt(`Qual será a porcentagem de aumento?`))
  var aumento = salario * (porcentagem / 100)
  var reajuste = salario + aumento
  salario.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})
  aumento.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})
  reajuste.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})
  res.innerHTML += `<h2>Olá ${nome}, Você recebeu ${reajuste.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})}} com o reajuste, seu sálario teve ${aumento.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})}} de aumento.</h2>`
  
}