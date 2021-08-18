let codigo = Number(prompt(`Informe o código da rede social`))
// percorre o valor procurado
let conta = 0
for(let i=0; i<5; i++){ // percorre o vetor vetorUsuarios
    if (vetorUsuarios[i].codigoRedeSocial == codigo) { // encontrei
        conta = conta + vetorUsuarios[i].qtdePosts
    }
}
if (conta == 0){
    console.log(`Não houve postagem ou rede social não existe`)
}

else {
    console.log(`A qtde de post na rede social ${codigo} foi ${conta}`)
}