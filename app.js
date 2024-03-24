let nome = prompt('Digite seu nome')
//mostra o tipo de dado
console.log(nome, typeof nome);

let nota01 = prompt('Digite a primeira nota')
console.log(nota01, typeof nota01);

nota01 = parseFloat(nota01)
console.log(nota01, typeof  nota01)

let nota02 = parseFloat( prompt('Digite a segunda nota'))
console.log(nota02, typeof nota02);

let soma = nota01 + nota02

console.log(nota01 + nota02)

document.getElementById('resultado').innerHTML = " <strong>Nome: </strong> " + nome + " <strong>Nota 01: </strong> " + nota01 + " <strong>Nota 02: </strong> " + nota02 + " <strong>Soma das notas: </strong> " + soma

document.getElementById('resultado2').innerHTML = `
    <strong>Nome: </strong>${nome} 
    <strong>Nota 01: </strong>${nota01} 
    <strong>Nota 02: </strong>${nota02} 
    <strong>Soma das notas: </strong>${soma}
`