// condições


// condições

let idade = 33

if(idade >= 30){
    console.log("você é adulto")
}


// condicionais compostas
// utilizamos as condicionais compostas quando queremos dar duas opções ao usuário

let saldo = "10 Vwn Cents"

if(saldo == "100 Vwn Cents"){
    console.log("vou guardar para investir")
} else{
    console.log("preciso de Cents Vnw")
}

let marcaDeCarro = "Caloi"

if(marcaDeCarro == "BMW"){
    console.log("Comprei a minha mercedez")
} else{
    console.log("vou de bike")
}

// operadores lógicos

// && (AND) -> ele somente vai executar a ação da nossa condição, quando ambas as sentenças ou condições forem verdadeiras.

let idadeDoUsuario = 18

let saldoCartao = 200

if(idadeDoUsuario >= 18 && saldoCartao > 100){
    console.log("você está liberado para comprar")
} else{
    console.log("você não está liberado para comprar")
}



// || (OR) -> somente vai executar a ação da condição, se uma das duas senteças ou condições forem verdadeiras.

let comida = "salada"

let refrigerante = true

if(comida == "pizza" || refrigerante == true){
    console.log("estou muito feliz")
} else{
    console.log("estou muito triste")
}

let saborPizza1 = "mussarela"

let saborPizza2 = "brigadeiro"

if(saborPizza1 == "calabresa" || saborPizza2 =="caipira"){
    console.log("maravilha pode pedir!!!")
} else{
    console.log("peça outros sabores")
}

if(saborPizza1 == "portuguesa" && saborPizza2 == "brigadeiro"){
    console.log("muito pode pedir!!!")
} else{
    console.log("peça outros sabores")
}


// ! (NOT) -> o ele irá inverter a ordem lógica da sua condição se o resultado for verdadeiro ele irá converter para falso e vice-versa, se for falso ele irá converter para verdadeiro

console.log(!true)
console.log(!false)


// condicionais aninhadas
// sempre vamos utilizar quando temos mais de uma opção

let tamanhoRoupa ="g"

if(tamanhoRoupa == "p"){
    console.log("o tamanho e P")
} else if(tamanhoRoupa == "m"){
    console.log("o tamanho e M")
} else if(tamanhoRoupa == "g"){
    console.log("o tamanho e G")
} else if(tamanhoRoupa == "gg"){
    console.log("o tamanho  e GG")
} else{
    console.log("não tem esse tamanho requisitado")
}

