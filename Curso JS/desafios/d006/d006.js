var res = document.getElementById("resultado")

function conversor() {
  res.innerHTML = ""
  var celsius = Number(window.prompt('Qual a temperatura em ºC(Celsius)?'))
  var k = celsius + 273
  var f = (celsius * 1,8) + 32
  k = k.toFixed(2)
  f = f.toFixed(2)
  res.innerHTML += `<h3>A temperatura ${celsius} corresponde a... </h3> <br>`;
  res.innerHTML += `<p>${k}. Kelvin (ºK)</p>`;
  res.innerHTML += `<p>${f} Fahrenheitt (ºF)</p>`;
  
}