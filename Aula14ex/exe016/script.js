function contar(){
    let txti = document.getElementById("inicio")
    let txtf = document.getElementById("final")
    let txtp = document.getElementById("passo")
    let res = document.getElementById("res")

    if (txti.value.length == 0 || txtf.value.length == 0  || txtp.value.length == 0 ){''
        res.innerHTML = 'Impossível contar!'

    }else {
        res.innerHTML = 'Contando: '
        let inicio = Number(txti.value)
        let final = Number(txtf.value)
        let passo = Number(txtp.value)
        if (passo <= 0){
            alert('Passo invalido! Considerando PASSO 1')
            passo = 1
        }
        if (inicio < final) {
            for(let c = inicio; c <= final; c += passo){
                    res.innerHTML += `${c} \u{1F449}`
            }
        }else {
            for(let c = inicio; c >= final; c -= passo){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        
        res.innerHTML += `\u{1F3C1}`
    }


}