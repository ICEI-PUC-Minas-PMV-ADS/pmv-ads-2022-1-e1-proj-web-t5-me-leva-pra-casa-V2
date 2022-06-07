// setando dados iniciais
let dados = buscaDadosLocalStorage() || [];
renderizaDadosNaTabela(dados)
function buscaDadosLocalStorage() {
    return JSON.parse(localStorage.getItem("__dados__"));
}
function atualizaLocalStorage(dados) {
    localStorage.setItem("__dados__", JSON.stringify(dados))
}
function cadastraAnimais() {
    const Nome = document.querySelector('#txtNome')?.value;
    const Idade = document.querySelector('#txtIdade')?.value;
    const Porte = document.querySelector('#txtPorte')?.value;
    const Sexo = document.querySelector('#txtSexo')?.value;
    const Descricao = document.querySelector('#txtDescricao')?.value;
    const Imagem = document.querySelector('#txtImagem')?.value;
    const registro = {
        Id: Math.floor(Math.random() * 10), // inserindo ID aletório
        Nome,
        Idade,
        Porte,
        Sexo,
        Descricao,
        Imagem
    }
    dados.push(registro)
    atualizaLocalStorage(dados);
    renderizaDadosNaTabela([registro])
    alert("Registro salvo com sucesso")
    $("#modalRegistro").modal("hide")
    limpaModal()
}
function limpaModal() {
    $("#txtNome").val("")
    $("#txtIdade").val("")
    $("#txtPorte").val("")
    $("#txtSexo").val("")
    $("#txtDescricao").val("")
}
function renderizaDadosNaTabela(itens) {
    if(!itens) {
        return;
    }
    const tabela = document.getElementById("tbldados");
    itens.forEach(item => {
        let novaLinha = document.createElement("tr");
        for (const [key, value] of Object.entries(item)) {            
            if(key !== 'Imagem') {
                let celula = document.createElement("td");
                celula.innerText = value;
                novaLinha.appendChild(celula);
            }
        }
        tabela.appendChild(novaLinha);
    });
}