//Objeto
const user = {
    name: 'Robson',
    idade: 28,
    address: {
        street: 'Rua teste',
        number: 99
    }
}

//Desestruturação, é remover partes do obj para colocar em outro objeto (por enquanto não vi muito uso nisso)

const { address } = user //const address = user.address

const { name, idade: age } = user //também posso fazer mais de 1 variavel ao mesmo tempo
//inclusive posso remonear idade para age, pegou idade do obj e colocou a informação na variavel age

document.body.innerText = JSON.stringify({ address, age })

const { nickname = 'Fernandes' } = user //posso definir valor padrão caso ele não ache a informação no obj

//um exemplo usando desestruturação em uma função

function mostraIdade({idade}){
    return idade;
}

document.body.innerText = monstraIdade(user)

//Ele passou user como argumento, mas na função recebeu apenas o valor da chave idade em uma var idade

