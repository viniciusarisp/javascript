function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = window.document.getElementById('txtano')
    var res = document.querySelector('div#resultado')
    if(nasc.value.length == 0 || nasc.value > ano) {    
        window.alert(" [ERRO] Verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(nasc.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id' ,'foto')
        if(fsex[0].checked) {
            var gênero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src' , 'bebem.jpg')
            } else if(idade < 23){
                img.setAttribute('src' , 'jovemm.jpg')
            } else if(idade < 60){
                img.setAttribute('src' , 'adultom.jpg')
            } else {
                img.setAttribute('src' , 'idosom.jpg')
            }
        } else {
            var gênero = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src' , 'bebef.jpg')
            } else if(idade < 23){
                img.setAttribute('src' , 'jovemf.jpg')
            } else if(idade < 60){
                img.setAttribute('src' , 'adultof.jpg')
            } else {
                img.setAttribute('src' , 'idosof.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    } 
    
}


