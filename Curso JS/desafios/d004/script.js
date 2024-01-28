function btn01() {
  var produto =(window.prompt("Que produto você está comprando?"))
  var custo = Number(window.prompt(`Quanto custa o(a) ${produto} que você está comprando?`))
  var valor = Number(window.prompt(`Qual o valor que você deu para pagar pelo(a) ${produto}`))
  var troco = (valor - custo)
  custo.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})
  valor.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})
  troco.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})
  window.alert(`
  Você comprou ${produto} que custou 
  ${custo.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})}!
  Deu ${valor.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})} em dinheiro e vai receber ${troco.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})}`)
   

}