//Objeto
const user = {
    name: 'Robson',
    idade: 28,
    address: {
        street: 'Rua teste',
        number: 99
    }
}

// Rest operator

const {name, ...rest} = user;

document.body.innerText = JSON.stringify(rest) //vai mostrar todas as chaves/valores menos o name
//isso seria mostrar o resto da propriedade tirando algo em especifico

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const [first, second, ...resto] = array; //deu erro pois já tem o exemplo acima

document.body.innerText = JSON.stringify({first, second, resto}) //var first é 1 valor, second o 2° valor e rest todos os outros como uma array a parte

//ultimo exemplo
const [primeiro, ,terceiro, ...restoo] = array; //como o 2° espaço ta em branco ele vai pular, vai pega o 1° valor o 3° já que o 2° está em branco, não tem variavel para alocar, e o resto
