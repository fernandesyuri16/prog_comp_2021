let principal = () => {
    let opcao
    let vetor = []
    let matriz = []
    do{
        opcao = Number(prompt(`1. Cadastrar um carro \n2. Cadastrar as Vendas \n3. Sair \n4.`))
        switch(opcao){
            case 1: cadastraCarro(vetor)
                    break
            case 2: cadastraVendas(matriz, vetor)
                    break
            case 3: calculaVendasCarro(matriz, vetor)
                    break
            case 4: calculaVendasTrimestre(matriz)
                    break
            case 5: alert(`O Programa será encerrado!`)
                    break
            default: alert(`Opção Inválida`)
        }
    }
    while (opcao != 5)
}

let cadastraCarro = (vetor) => {
    let objeto = {
        modelo: prompt("Informe o modelo do carro:"),
        marca: prompt("Informe a marca do carro:")
    }
    vetor.push(objeto)
}

let cadastraVendas = (matriz, vetor) => {
    for(let i = 0; i < vetor.length; i++){
        matriz[i] = [] // inicializa a linha da matriz
        for(let j = 0; j < 4; j++){
            matriz[i][j] = prompt(`Informe o total de vendas da marca ${vetori[i].marca}, 
            do modelo ${vetor[i].modelo} e no ${j} trismestre`)
        }
    }
}

let calculaVendasCarro = (matriz, vetor) => {
    for(i = 0; i < vetor.length; i++){
        let total = 0
        for(let j = 0; j < 4; j++){
            total = total + matriz[i][j]
        }
        alert(`O total vendido do carro \nMarca: ${vetor[i].marca} \nModelo: ${vetor[i].modelo} \n é ${total}`)
    }
}

let calculaVendasTrimestre = (matriz) => {
    for(let j = 0; j < 4; j++){ // para cada trimestre
        let total = 0
        for(let i = 0; i < vetor.length; i++){ // para cada carro
        total = total + matriz[i][j]
        }
        alert(`O total vendido no trimestre ${j} foi ${total}`)
    }
}
