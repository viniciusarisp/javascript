function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível contar!'
    } else {
        if(Number(passo.value) == 0) {
            window.alert("Passo inválido! considerando PASSO 1")
            passo.value = 1
        }

        res.innerHTML = 'Contando: <br> '

        if(Number(ini.value) < Number(fim.value)) {
            for(let c = Number(ini.value); c <= Number(fim.value); c += Number(passo.value)){
                res.innerHTML += ` ${c} 👉`
            }    
        } else {
            for(let c = Number(ini.value); c >= Number(fim.value); c -= Number(passo.value)){
                res.innerHTML += ` ${c} 👉`
            }
        }
        res.innerHTML += `🌈` 
    }
}