
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'imagens/criancam.jpg')
            } else if (idade < 18) {
                img.setAttribute('src', 'imagens/adolescentem.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adultom.jpg')
            }else {
                img.setAttribute('src', 'imagens/idosom.jpg')
            } 
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'imagens/criancaf.jpg')
            } else if (idade < 18) {
                img.setAttribute('src', 'imagens/adolescentef.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adultof.jpg')
            }else {
                img.setAttribute('src', 'imagens/idosof.jpg')
            } 
        }

        res.style.textAlign = 'Center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}