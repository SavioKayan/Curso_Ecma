var res = document.getElementById("resultado")
function conversor() {
  var cotaçao = Number(window.prompt('Qual a cotação atual do dólar?'))
  var carteira = Number(window.prompt('Quanto você deseja converter?'))
  var dólar = Number.parseFloat(carteira / cotaçao)
  dólar.toLocaleString('pt-BR',{style: 'currency', currency: 'USD'})
  dólar= dólar.toFixed(2)
  res.innerHTML += `<h3>Você irá receber ${dólar} USD$ dolares.... </h3> <br>`;
  
}