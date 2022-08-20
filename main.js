function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('anotxt')
    var resultado = document.getElementById('resultado')
    var sexoradio = document.getElementsByName('sexoradio')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fano.value <= 1900 | fano.value > ano) {
        alert('[Erro] Verifique os dados e tente novamente!')
    } else {

        if (sexoradio[1].checked) {
            genero = 'Mulher'
            if (idade >= 00 && idade < 5) {
                img.setAttribute('src', 'bebe-mulher.jpg')
            } else if (idade < 11) {
                img.setAttribute('src', 'crianca-mulher.jpg')
            }
            else if (idade >= 11 && idade < 18) {
                img.setAttribute('src', 'adolescente-mulher.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto-mulher.jpg')
            } else {
                img.setAttribute('src', 'idoso-mulher.jpg')
            }

        } else if (sexoradio[0].checked) {
            genero = 'Homem'
            if (idade >= 00 && idade < 5) {
                img.setAttribute('src', 'bebe-homem.jpg')
            } else if (idade < 11) {
                img.setAttribute('src', 'crianca-homem.jpg')
            }
            else if (idade >= 11 && idade < 18) {
                img.setAttribute('src', 'adolescente-homem.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto-homem.jpg')
            } else {
                img.setAttribute('src', 'idoso-homem.jpg')
            }
        }
        resultado.innerHTML = `Você é um(a) ${genero} de ${idade} anos.<br>`
        resultado.appendChild(img)
    }
}