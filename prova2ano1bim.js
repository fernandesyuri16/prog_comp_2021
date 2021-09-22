let sistemaViagem = () => {

    let opcao
    let vetViagens = [] // vetor de viagens

    do {
        opcao = Number(prompt(`Escolha uma opção: \n1. Cadastrar viagens \n2. Consulta A \n3. Consulta B \n4. Consulta C \n5. Sair`))
        switch (opcao){
            case 1: cadastraViagem(vetViagens)
                break
            case 2: consultaPrecoMedio(vetViagens, preco)
                break
            case 3: consultaViagem(vetViagens, tipo)
                break
            case 4: consultaPais(vetViagens, pais)
                break
            case 5: alert(`O programa será encerrado!`)
                break
            default: alert(`Opção inválida!`)
        }
    }
    while (opcao != 5)
}

let cadastraViagem = (vetViagens) => {
    let objeto = {
        codigo: prompt(`Informe o código da Viagem: `),
        país: prompt(`Informe o país da Viagem: `),
        preco: Number(prompt(`Informe o preço da Viagem: `)),
        tipo: prompt(`Informe o tipo da Viagem: \n(A) p/ Aérea \n(T) p/ Terrestre`).toUpperCase()
    }
    // verifica se já tem outra viagem com o mesmo código
    let achou = false
    for(let i = 0; i < vetViagens.length; i++){
        if (vetViagens[i].codigo == objeto.codigo){
            achou = true
            alert(`ATENÇÃO: Uma viagem com esse código já foi cadastrada!`)
        }
    }
    if (!achou){
        vetViagens.push(objeto)
        alert(`Viagem cadastrada com sucesso`)
    }
}

let consultaPrecoMedio = (vetViagens) => {
    for(let i = 0; i < vetViagens.length; i++){
        let soma = 0
        soma = soma + vetViagens[i].preco
    }
    alert(`O preço médio das Viagens é: ${soma/vetViagens.length}`)
}

let consultaViagem = (vetViagens, tipo) => {
    for(let i = 0; i < vetViagens.length; i++){
        if (vetViagens[i].tipo == tipo){
            console.log(vetViagens)
        }
    }
}

let consultaPais = (vetViagens, pais) => {
    for(let i = 0; i < vetViagens.length; i++){
        if(vetViagens[i].pais == pais) {
            if (vetViagens[i].preco < menorPreco)
            let menorPreco = 0
            let menorPreco = vetViagens[i].preco // trás o menor preço
        }
    }
    alert(`O menor valor de Viagem para este país custa R$ ${menorPreco},00`)
}

