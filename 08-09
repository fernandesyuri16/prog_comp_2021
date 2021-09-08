function principal (){

    let opcao
    let idade = 10 // escopo local -> funciona somente NO LOCAL ONDE FOI DEFINIDO (nesse caso função principal)
    let peso, altura

    do {
        opcao = Number(prompt(`Digite 1 - F1 \nDigite 2 - F2 \nDigite 3 - F3 \nDigite 4 - Sair`))
        switch(opcao){
            case 1: idade = Number(prompt(`Informe sua idade`))
                    idade = f1(idade)
                    break
            case 2: peso = Number(prompt(`Informe o seu peso:`))
                    f2(idade, peso)
                    break
            case 3: idade = Number(prompt(`Informe sua idade:`))
                    peso = Number(prompt(`Informe o seu peso:`))
                    altura = Number(prompt(`Informe sua altura:`))
                    f3(idade, peso, altura)
                    break
            case 4: alert(`O Programa será encerrado!`)
                    break
            default: alert(`Opção Inválida!!!`)
        }
    }
    while (opção != 4)
}

// função que recebe parâmetro idade
function f1(idade){
    //let idade = 10
    alert(`O valor de idade é ${idade}`)
    idade = idade + 10
    return idade // retornar o resultado da função
}

// função que recebe parâmetro idade e peso
function f2(idade, peso){
    alert(`O valor de idade é: ${idade} e do peso é: ${peso}`)
}

// função que recebe parâmetro idade, peso e altura
function f3(idade, peso, altura){
    alert(`O valor de idade é ${idade}, o peso é: ${peso} e a altura é: ${altura}`)
}
