// Templates Literals

const name = 'Robson'
const message = `Bem vindo, ${name?? 'visitante'}`//apenas testo se existe ou não e retorno ele ou a mensagem

const message2 = `Bem vindo, ${name? name : 'visitante'}`//testo se existe ou não e o que ele vai retornar

document.body.innerText = message