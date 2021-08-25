let sistemaVendas = () => {

    let opcao
    do {
        opcao = Number(prompt(`Informe: \n1. Cadastrar Vendedor \n2. Cadastrar Venda \n3. Sair`))
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
            case 2:
                    break
            case 3: alert(`O programa será encerrado`)
                    break
            default: alert(`Opção Inválida!`)
        }

    }
    while (opcao != 3)
}