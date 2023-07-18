
function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12){
        document.body.style.background = '#e7cc31'
        img.src = 'imagens/manha.jpg'
    } else if (hora >=12 && hora < 18) {
        document.body.style.background = '#ee8b2e'

        img.src = 'imagens/tarde.jpg'
    } else {
        document.body.style.background = '#3b567e'
        img.src = 'imagens/noite.jpg'
    }
}
