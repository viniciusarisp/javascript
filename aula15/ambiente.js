let num = [5 , 8 , 9, 2 ,3]
num.push(1)
num.sort()
console.log(num)
console.log(`o Vetor tem ${num.length} posições`)
console.log(`o primeiro valor do vetor é: ${num[0]}`)
let pos = num.indexOf(4)
if(pos == -1) {
    console.log(`o valor 4 não foi encontrado`)
} else {
    console.log(`O valor 4 foi parar na posição ${pos}`)
}
