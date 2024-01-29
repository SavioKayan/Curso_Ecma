var res = document.getElementById("resultado")

function conversor() {
  res.innerHTML = ""
  var metros = Number(window.prompt('Qual a distância em metros?'))
  var km = metros / 1000
  var hm = metros / 100
  var dam = metros / 10
  var dm = metros * 10
  var cm = metros * 100
  var mm = metros * 1000

  res.innerHTML += `<h3>A distância de ${metros} metros, corresponde a... </h3> <br>`;
  res.innerHTML += `<p>${km} quilômetros (Km)</p>`;
  res.innerHTML += `<p>${hm} hectômetros (Hm)</p>`;
  res.innerHTML += `<p>${dam} decâmetros (Dam)</p>`;
  res.innerHTML += `<p>${dm} decímetros (dm)</p>`;
  res.innerHTML += `<p>${cm} centímetros (cm)</p>`;
  res.innerHTML += `<p>${mm} milímetros (mm)</p>`;    
}