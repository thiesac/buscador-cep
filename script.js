let listaCep = [];

async function buscarCep() {
    let cep = document.getElementById("cep").value;
    if (cep.length == 8) {
        let resultado = await fetch("https://viacep.com.br/ws/" + cep + "/json/");
        const info = await resultado.json();
        //autocompleta os dados com a busca da API
        document.getElementById("rua").value = info.logradouro;
        document.getElementById("bairro").value = info.bairro;
        document.getElementById("cidade").value = info.localidade;
        document.getElementById("estado").value = info.uf;
    } else {
        alert("CEP deve conter 8 números")
    }
}

function salvar() {  
    insereCadastro = { //pega os dados do usuário
        nome: document.getElementById("nome").value,
        idade: document.getElementById("idade").value,
        genero: document.getElementById("genero").value,
        cep: document.getElementById("cep").value,
        rua: document.getElementById("rua").value,
        complemento: document.getElementById("complemento").value,
        bairro: document.getElementById("bairro").value,
        cidade: document.getElementById("cidade").value,
        estado: document.getElementById("estado").value,
    }
    listaCep.push(insereCadastro)
    imprimir() 
    esvaziarCampos()
} 

function esvaziarCampos() { //limpa os dados que usuário preencheu
    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";
    document.getElementById("genero").value = "";
    document.getElementById("cep").value = "";
    document.getElementById("rua").value = "";
    document.getElementById("complemento").value = "";
    document.getElementById("bairro").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("estado").value = "";
}

function imprimir() {
    let sectionCadastro = document.getElementById("mostra-cadastros");
    let cacheSection = "";
    sectionCadastro.innerHTML = "";

    for (let i = 0; i < listaCep.length; i++) {
        cacheSection = cacheSection + `
            <div class="cadastros">
                <p>Nome: ${(listaCep[i].nome).toUpperCase()}</p>
                <p>Idade: ${listaCep[i].idade}</p>
                <p>Gênero: ${listaCep[i].genero.toUpperCase()}</p>
                <p>CEP: ${listaCep[i].cep}</p>
                <p>Rua: ${listaCep[i].rua.toUpperCase()}</p>
                <p>Complemento: ${listaCep[i].complemento.toUpperCase()}</p>
                <p>Bairro: ${listaCep[i].bairro.toUpperCase()}</p>
                <p>Cidade: ${listaCep[i].cidade.toUpperCase()}</p>
                <p>Estado: ${listaCep[i].estado.toUpperCase()}</p>
            </div>`  
    }
    sectionCadastro.innerHTML = cacheSection
}