// setando dados iniciais
renderizaDadosNaTabela(buscaDadosLocalStorage() || [])
function buscaDadosLocalStorage() {
    return JSON.parse(localStorage.getItem("__dados__"));
}
function atualizaLocalStorage(dados) {
    localStorage.setItem("__dados__", JSON.stringify(dados))
}
function cadastraAnimais() {
    const dados = buscaDadosLocalStorage() || [];
    console.log(dados.length)
    const Nome = document.querySelector('#txtNome')?.value;
    const Idade = document.querySelector('#txtIdade')?.value;
    const Porte = document.querySelector('#txtPorte')?.value;
    const Sexo = document.querySelector('#txtSexo')?.value;
    const Descricao = document.querySelector('#txtDescricao')?.value;
    const Imagem = document.querySelector('#txtImagem')?.value;
    const registro = {
        Id: dados.find(item => item.Id == dados.length + 1) ? dados.length + 2 : dados.length + 1, // inserindo ID aletório
        Nome,
        Idade,
        Porte,
        Sexo,
        Descricao,
        Imagem,
        editar: '',
        excluir: ''
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
    if (!itens) {
        return;
    }
    const tabela = document.getElementById("corpoTabela");
    itens.forEach(item => {
        let novaLinha = document.createElement("tr");
        for (const [key, value] of Object.entries(item)) {
            if (key == 'excluir' || key == 'editar') {
                let celula = document.createElement("td");
                let icone = document.createElement("i");
                icone.className = key == 'excluir'
                    ? "fa fa-trash-o" : "fa fa-pencil"
                icone.setAttribute(
                    'onclick', 
                    key == 'excluir'
                        ? `excluiItem(${item.Id})`
                        : `editarItem(${item.Id})`
                )
                celula.appendChild(icone)
                novaLinha.appendChild(celula);
            }
            else if (key !== 'Imagem') {
                let celula = document.createElement("td");
                celula.innerText = value;
                novaLinha.appendChild(celula);
            }
        }
        tabela.appendChild(novaLinha);
    });
}
function limpaTabela() {
    const linhas = document.querySelectorAll('#corpoTabela> tr')
    linhas.forEach(linha => linha.parentNode.removeChild(linha))
}
function excluiItem(id) {
    const dados = buscaDadosLocalStorage();
    const dadosFiltrados = dados.filter(dado => dado.Id != id);
    atualizaLocalStorage(dadosFiltrados);
    limpaTabela();
    renderizaDadosNaTabela(dadosFiltrados);
}

    function editarItem(id) {
        
        $("modalRegistro").modal("show")
     
         dados.forEach(function(item) {
            if (item.ID == id) {
                 $("#txtNome").val(item.Nome)
                 $("#txtIdade").val(item.Idade)
                 $("#txtPorte").val(item.Porte)
                 $("#txtSexo").val(item.Sexo)
                 $("#txtDescricao").val(item.Descricao)
                 $("#txtImagem").val(item.Imagem)
     
            } 
         })
     
        
     }
    
