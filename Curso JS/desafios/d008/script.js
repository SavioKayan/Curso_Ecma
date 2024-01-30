var res = document.getElementById("resultado")

function btn01() {
  var produto =(window.prompt("Que produto você está comprando?"))
  var preço = Number(window.prompt(`Quanto custa o(a) ${produto} que você está comprando?`))
  var desconto = (preço * 0.10)
  var preçocd = (preço - desconto )
  produto.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})
  preço.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})
  desconto.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})
  res.innerHTML += `<h2>Você comprou ${produto} que custou ${preço.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})}!
  Recebeu ${desconto.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})} de desconto e pagou. ${preçocd.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})}</h2>`;
}