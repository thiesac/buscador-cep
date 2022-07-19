let listaCep = [];

async function buscarCep() {
    let cep = document.getElementById("cep").value;
    let resultado = await fetch(
        "https://viacep.com.br/ws/" + cep + "/json/"
    );
    listaCep.push(resultado.json());
    console.log(listaCep)
    
    document.getElementById("rua").value = listaCep.logradouro;
    document.getElementById("bairro").value = listaCep.bairro;
    document.getElementById("cidade").value = listaCep.localidade;
    document.getElementById("estado").value = listaCep.uf;
}

function salvar() {    
    let insereCadastro = {
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
    imprimeCadastro()
}
    


function imprimeCadastro() {
    let sectionCadastro = document.getElementById("mostra-resultados");
    let cacheSection = "";
    sectionCadastro.innerHTML = "";
    for (let i = 0; i < listaCep.length; i++) {
        cacheSection = cacheSection + `
            <div class="cadastro">
                <p>${listaCep[i].nome}</p>
                <p>${listaCep[i].idade}</p>
                <p>${listaCep[i].genero}</p>
                <p>${listaCep[i].cep}</p>
                <p>${listaCep[i].rua}</p>
                <p>${listaCep[i].complemento}</p>
                <p>${listaCep[i].bairro}</p>
                <p>${listaCep[i].cidade}</p>
                <p>${listaCep[i].estado}</p>
            </div>
        `
    }
}