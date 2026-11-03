function calcularRankeadas(vitorias, derrotas) {
  let saldoVitorias = vitorias - derrotas;
  let nivel = "";

  if (vitorias < 10) {
    nivel = "Ferro";
  } else if (vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }

  return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

// Testando com diferentes cenários
console.log(calcularRankeadas(5, 3));    // Ferro
console.log(calcularRankeadas(15, 8));   // Bronze
console.log(calcularRankeadas(40, 20));  // Prata
console.log(calcularRankeadas(70, 30));  // Ouro
console.log(calcularRankeadas(85, 15));  // Diamante
console.log(calcularRankeadas(95, 10));  // Lendário
console.log(calcularRankeadas(110, 20)); // Imortal
