//Objetos

const user = {
    name: 'Robson',
    idade: 28,
    address: {
        street: 'Rua teste',
        number: 99
    }
}

document.body.innerText = ('name' in user) //verificar se exites chave 'name' em objeto user

document.body.innerText = Object.keys(user) //retorna as chaves

document.body.innerText = Object.values(user) //retorna os valores, mas vai bugar no address

document.body.innerText = JSON.stringify(Object.values(user))//vai monstrar todos os valores do objeto como string

document.body.innerText = JSON.stringify(Object.entries(user))//vai monstrar o par de chave/valor como string

