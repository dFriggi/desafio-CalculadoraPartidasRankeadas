torrar("pão de forma" , "davi")
torrar("pão integral" , "ethel")
torrar("pão de leite", undefined, 90)
var nome = true

function torrar(pao, nome = "?" , valor = "o valor não foi pago"){
    console.log("torrada feita com " + pao)
    console.log(", pedido feito por " + nome)
    console.log("o valor foi " + valor)
    }
