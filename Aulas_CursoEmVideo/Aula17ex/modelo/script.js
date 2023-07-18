var lista = document.getElementById('lista')
var fila = []
var res = document.getElementById('res')

function adicionar(){
    let num = Number(document.getElementById('num').value)

    if (num > 100 || num < 1 || fila.includes(num)) {
        alert('Valor é invalido ou já encontrado na lista')
    } else {
            let item = document.createElement('option')
            item.text = `Valor ${num} adicionado.`
            item.value = `slot${fila.length - 1}`
            lista.appendChild(item)
            fila[fila.length] = num
            document.getElementById('num').value = ''
            document.getElementById('num').focus()
     }

}

function finalizar(){
    if (fila.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let filaOrdenada = fila.sort()
        let soma = 0

        for (n in fila) {
            soma += fila[n]
        }

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${fila.length} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${filaOrdenada[filaOrdenada.length - 1]}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${filaOrdenada[0]}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${soma / fila.length}.</p>`
    }

}