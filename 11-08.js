let gerenciaRedesSociais = () => {
    // cadastro das redes sociais 
    let vetorRedesSociais = []
    for(let i=0; i<5; i++){
        let objeto = {
            codigo: Number(prompt(`Informe o código da rede social`)),
            nome: prompt(`Informe o Nome da Rede social`),
            url: prompt(`Informe url da rede social`)
        }
        // inserir o objeto no vetor
        vetorRedesSociais.push(objeto)
    }

    let vetorUsuarios = []
    for(let i=0; i<5; i++){
        let objeto = {
            login: Number(prompt(`Informe o login do usuário`)),
            nome: prompt(`Informe o Nome do usuário`),
            codigoRedeSocial: Number(prompt(`Informe codigo da rede social`)),
            qtdePost: Number(prompt(`Informe qtde de post`))
        }
        
        // inserir o objeto no vetor se a rede social existir
        let achou = false // assumo que não econtrei a rede social
        let j = 0 // indice do vetor de redes sociais

        while(!achou && j<5){ // sai ou porque achou ou porque acabou o vetor
            if (vetorRedesSociais[j].codigo == objeto.codigoRedeSocial){ // achamos
                vetorUsuarios.push(objeto) // inserimos
                achou = true
                alert(`Usuário Interido com Sucesso!!`)
            }
            j++ // para ir para o próximo elemento
        }
        if (!achou){
            alert(`Usuário não inserido, rede social não encontrada`)
        }

    }
}