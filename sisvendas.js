let sistemaVendas = () => {

    let opcao
    let vetVendedores = []
    let vetVendas = []

    do {
        opcao = Number(prompt(`Informe: \n1. Cadastrar Vendedor \n2. Cadastrar Venda \n3. Consultar Vendedores \n4. Sair`))
        switch(opcao){
            case 1: let objeto = {
                        codigo: Number(prompt(`Informe o código:`)),
                        nome: prompt(`Informe o Nome:`),
                        rg: Number(prompt(`Informe o RG:`))
                    }
                    // verificar se ja tem outro vendedor com o mesmo código
                    let achou = false
                    // vetVendedores.lenght retorna o tamanho do vetor (não sei o tamanho ".lenght")
                    for(let i=0; i < vetVendedores.lenght; i++){
                        if(vetVendedores[i].codigo == objeto.codigo){
                            achou = true // achei - não posso cadastrar
                        }
                    }
                    if (!achou){
                            // adiciona objeto no vetor
                            vetVendedores.push(objeto)
                            alert(`Vendedor Cadastrado com Sucesso!`)
                    }
                    else {
                        alert(`Opa!!! Já existe um vendedor cadastrado com esse código!`)
                    }
                    break
            case 2: let objeto1 = {
                codigo: Number(prompt(`Informe o Código do Vendedor:`)),
                mes: Number(prompt(`Informe o Mês da Venda:`)),
                valor: Number(prompt(`Informe o valor da Venda:`)) 
            }
            let achou1 = false 
            for(let i=0; i<vetVendas.length; i++){
                if((vetVendas[i].codigo == objeto1.codigo) && (vetVendas[i].mes == objeto1.mes)){
                    achou1 = true // achei - não posso cadastrar a venda
                }
            }
            if (!achou1){
                // adiciona o objeto no vetor
                vetVendas.push(objeto1)
            }
            else {
                alert(`Já existe vendas com esse vendedor nesse mês`)
            }
            console.log(vetVendas)
                    break
            case 3: alert(`O programa será encerrado`)
                    break
            default: alert(`Opção Inválida!`)
        }

    }
    while (opcao != 3)


}

