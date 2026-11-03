# Calculadora de Partidas Rankeadas

Segundo desafio de lógica de programação proposto no bootcamp da DIO.

## Sobre o desafio

A proposta foi criar uma função que receba a quantidade de vitórias e derrotas de um herói, calcule o saldo e retorne em qual nível ele está classificado.

## Regras de classificação

O nível é definido com base na quantidade de **vitórias**:

| Vitórias | Nível |
|----------|-------|
| Menos de 10 | Ferro |
| 11 a 20 | Bronze |
| 21 a 50 | Prata |
| 51 a 80 | Ouro |
| 81 a 90 | Diamante |
| 91 a 100 | Lendário |
| Acima de 101 | Imortal |

## Saída esperada

```
O Herói tem de saldo de {saldo} está no nível de {nivel}
```

## Como rodar

```bash
node index.js
```
