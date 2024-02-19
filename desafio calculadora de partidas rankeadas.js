//primeiro determinar as variáveis
let saldoDeRanked = ranked(103 , 2)
let rankDoHeroi
//função para obter o saldo das rankeds
function ranked(vitorias , derrotas){
    let resultadoVitoriasDerrotas = vitorias - derrotas
    return resultadoVitoriasDerrotas
}
//switchs para calcular o nível do herói
switch(true){
    case saldoDeRanked <= 10:
        rankDoHeroi = "Ferro"
        break
    case saldoDeRanked >= 11 && saldoDeRanked <= 20:
        rankDoHeroi = "Bronze"
        break
    case saldoDeRanked >= 21 && saldoDeRanked <= 50:
        rankDoHeroi = "Prata"
        break
    case saldoDeRanked >= 51 && saldoDeRanked <= 80:
        rankDoHeroi = "Ouro"
        break
    case saldoDeRanked >= 81 && saldoDeRanked <= 90:
        rankDoHeroi = "Diamante"
        break
    case saldoDeRanked >= 91 && saldoDeRanked <= 100:
        rankDoHeroi = "Lendário"
        break
    case saldoDeRanked >= 101:
        rankDoHeroi = "Imortal"
        break
}
console.log(`O Herói tem saldo de ${saldoDeRanked} e está no nível ${rankDoHeroi}`)