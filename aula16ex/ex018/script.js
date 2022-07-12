let numeros = []
let dados = document.getElementById('dados')
let num = document.getElementById('txtnum')
let tabel = document.getElementById('tabnum')
function isNumero(n) {
    if(n >= 1 && n <= 100) {
        return true
    } else {
        return false
    }
}
function adicionar(){
    if(num.value.length == 0 || !isNumero(num.value) || inLista(num.value)) {
        window.alert(`Valor inválido ou já encontrado na lista.`)
    } else {
        dados.innerHTML = ''
        let item = document.createElement('option')
        item.text = `Valor ${Number(num.value)} adicionado`
        tabel.appendChild(item)
        numeros.push(Number(num.value))
    }
    num.value = ''
    num.focus()
}
function analise() {
    if(numeros.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let total = numeros.length
        let soma = 0
        let media = 0
        for(let c in numeros) {
            soma += numeros[c]
        }
        dados.innerHTML += `Ao todo temos ${total} números cadastrados <br> 
        O maior valor registrado foi: ${Math.max(...numeros)}<br>
        O menor valor registrado foi: ${Math.min(...numeros)}<br>
        Somando todos os valores temos: ${soma}<br>
        A media dos valores digitados é: ${(soma/total).toFixed(2)}`
    }
    
}
function inLista(n){
    if(numeros.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}