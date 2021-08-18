
let roupa = new Object();
roupa.tipo = "camisa";
roupa.marca = "nike";
roupa.cor = "azul";


let vetor = []

for(let i=0; i<4; i++){
    //cria objeto
    let objeto = {
        nome: prompt(`Informe o nome do produto`),
        qtde: Number(prompt(`Informe qtde do produto`)),
        preco: Number(prompt(`Informe preço do produto`))
    }
    // adiciona o objeto no vetor
    vetor.push(objeto)
}

