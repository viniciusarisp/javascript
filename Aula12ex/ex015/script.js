function carregar() {
   var msg = window.document.getElementById("msg")
   var foto = window.document.getElementById("foto") 
   var data = new Date()
   var hora = ("00" + data.getHours()).slice(-2)
   var minutos = ("00" + data.getMinutes()).slice(-2)
   msg.innerHTML = `Agora são ${hora}:${minutos} horas`
   if(hora < 12) {
    //manhã
    foto.innerHTML = '<img src="manha.png">'
    document.body.style.background = 'green';
   } else if (hora <= 18) {
       //tarde
       foto.innerHTML = '<img src="tarde.png">'
       document.body.style.background = 'orange'
   } else if(hora > 18){
       //noite
       foto.innerHTML = '<img src="noite.png">'
       document.body.style.background = 'purple'
   }
}   

("00" + n).slice(-4)