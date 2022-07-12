function tabuada() {
    var num = document.getElementById('txtn')
    var sel = document.getElementById('tabu')
    if(num.value.length == 0) {
        alert('Por favor digite um número')
    } else {  
        sel.innerHTML = '' 
        for(var c = 1; c <= 10; c++){
            var item = document.createElement('option')
            item.text = `${Number(num.value)} x ${c} = ${c*Number(num.value)}`
            item.value = `tab${c}`
            sel.appendChild(item)
        }
    }
}