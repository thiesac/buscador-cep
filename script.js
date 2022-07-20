let listaCep = [];

async function buscarCep() {
    let cep = document.getElementById("cep").value;
    let resultado = await fetch("https://viacep.com.br/ws/" + cep + "/json/");
    const info = await resultado.json();
    listaCep.push(info);
    
    document.getElementById("rua").value = info.logradouro;
    document.getElementById("bairro").value = info.bairro;
    document.getElementById("cidade").value = info.localidade;
    document.getElementById("estado").value = info.uf;
}

function salvar() {  
    listaCep = {
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
    document.getElementById("mostra-cadastros").innerHTML = `
        <div>
            <p>Nome: ${listaCep.nome}</p>
            <p>Idade: ${listaCep.idade}</p>
            <p>Gênero: ${listaCep.genero}</p>
            <p>CEP: ${listaCep.cep}</p>
            <p>Rua: ${listaCep.rua}</p>
            <p>Complemento: ${listaCep.complemento}</p>
            <p>Bairro: ${listaCep.bairro}</p>
            <p>Cidade: ${listaCep.cidade}</p>
            <p>Estado: ${listaCep.estado}</p>
        </div>`  
    esvaziarCampos()
} 

function esvaziarCampos() {
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