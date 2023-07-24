//Objeto
const user = {
    name: 'Robson',
    idade: 28,
    address: {
        street: 'Rua teste',
        number: 99
    }
}

document.body.innerText = user.address.street // vai me mostrar o endereço

// Optinal Chaining
const user2 = {
    name: 'Robson',
    idade: 28,
    address: {
        street: 'Rua teste',
        number: 99,
        zip : {
            code: '85050000',
            city: 'Guarapuava'
        },
        showFullAddress () {
            return "ok";
        }
    }
}

document.body.innerText += user2.address.city // mas caso não exista vai me retornar um erro no console

//em vez de pedir a informação posso 1° testar se ela existe, caso exista ela eu retorno ela ou se não existir posso retornar uma mensagem de "Não informado"
document.body.innerText += user2.address ? user2.address.street : "Não informado"


// mas as vezes preciso testar muita informação
document.body.innerText += user2.address ? // testa ver se existe address em user2
    user2.address.zip ? // caso exista eu já testo se existe o zip em adress
        user2.address.zip.code // caso exista o zip eu retorno o code, nesse caso nem testei se exite code
        : "Zip não informado" // caso não exista o zip eu retorno que não existe
    : "Adress não informado" // a negativa do 1° teste, caso não exista o address


// poderia reforma o código acima em
document.body.innerText += user2.address?.zip?.code ?? "Não informado";



//funciona com função também, ficando assim, com o ?. antes da passagem de parametros para inicializa-la
document.body.innerText += user2.address?.showFullAddress?.() ?? "NAO"

