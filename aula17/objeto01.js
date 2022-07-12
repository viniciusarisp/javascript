let amigo = {nome: 'José', 
sexo: 'M', 
peso: 85.4,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}

amigo.engordar(Math.pow(2, 4))
console.log(`${amigo.nome} pesa ${amigo.peso} KG`)