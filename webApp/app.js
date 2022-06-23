// declara um conjunto inicial de contatos
var db_usuarios_inicial = {
    "data": []
}

function exibeUsuarios() {
    // Remove todas as linhas do corpo da tabela
    $("#table-usuarios").html("");

    // Popula a tabela com os registros do banco de dados
    for (i = 0; i < db.data.length; i++) {
        let usuario = db.data[i];    
        $("#table-usuarios").append(`<tr><td scope="row">${usuario.id}</td>
                                        <td>${usuario.nome}</td>
                                        <td>${usuario.email}</td>
                                        <td>${usuario.cpf}</td>
                                        <td>${usuario.telefone}</td>
                                        <td>${usuario.rua}</td>
                                        <td>${usuario.numero}</td>
                                        <td>${usuario.bairro}</td>
                                        <td>${usuario.cidade}</td>
                                        <td>${usuario.estado}</td> 
                                        <td>${usuario.senha}</td>                                               
                                    </tr>`);
    }
}

function init() {
    if (!db){
    db = db_usuarios_inicial;
    }
    // Adiciona funções para tratar os eventos 
    $("#btnInsert").click(function () {
        // Verfica se o formulário está preenchido corretamente
        if (!$('#form-usuario')[0].checkValidity()) {
            displayMessage("Preencha o formulário corretamente.");
            return;
        }

        // Obtem os valores dos campos do formulário
        let campoNome = $("#inputNome").val();
        let campoEmail = $("#inputEmail").val();
        let campoCpf = $("#inputCpf").val();
        let campoTelefone = $("#inputTelefone").val();
        let campoRua = $("#inputRua").val();
        let campoNumero = $("#inputNumero").val();
        let campoBairro = $("#inputBairro").val();
        let campoCidade = $("#inputCidade").val();
        let campoEstado = $("#inputEstado").val(); 
        let campoSenha = $("#inputSenha").val();                
        let usuario = { nome: campoNome, 
            email: campoEmail,
            cpf: campoCpf,
            telefone: campoTelefone, 
            rua: campoRua, 
            numero: campoNumero,
            bairro: campoBairro,
            cidade: campoCidade,
            estado: campoEstado,
            senha:campoSenha };

        insertUsuario(usuario);

        // Reexibe os usuarios
        exibeUsuarios();

        window.location.href = "login.html"
        
        // Limpa o formulario
        $("#form-usuario")[0].reset();
    });

    // Intercepta o click do botão Alterar
    $("#btnUpdate").click(function () {
        // Obtem os valores dos campos do formulário
        let campoId = $("#inputId").val();
        if (campoId == "") {
            displayMessage("Selecione um usuário para ser alterado.");
            return;
        }
        let campoNome = $("#inputNome").val();
        let campoEmail = $("#inputEmail").val();
        let campoCpf = $("#inputCpf").val();
        let campoTelefone = $("#inputTelefone").val();
        let campoRua = $("#inputRua").val();
        let campoNumero = $("#inputNumero").val();
        let campoBairro = $("#inputBairro").val();
        let campoCidade = $("#inputCidade").val();
        let campoEstado = $("#inputEstado").val(); 
        let campoSenha = $("#inputSenha").val();                
        let usuario = { nome: campoNome, 
            email: campoEmail,
            cpf: campoCpf,
            telefone: campoTelefone, 
            rua: campoRua, 
            numero: campoNumero,
            bairro: campoBairro,
            cidade: campoCidade,
            estado: campoEstado,
            senha: campoSenha };
        
        $("#form-usuario")[0].reset();
        updateUsuario(parseInt(campoId), usuario);
        

        // Reexibe os usuários
        exibeUsuarios();

        // Limpa o formulario
        $("#form-usuario")[0].reset();
    });

    // Intercepta o click do botão Excluir
    $("#btnDelete").click(function () {
        let campoId = $("#inputId").val();
        if (campoId == "") {
            displayMessage("Selecione um usuario a ser excluído.");
            return;
        }
        deleteUsuario(parseInt(campoId));

        // Reexibe os usuários
        exibeUsuarios();

        // Limpa o formulario
        $("#form-usuario")[0].reset();
    });

    // Intercepta o click do botão Listar Usuários
    $("#btnClear").click(function () {
        $("#form-usuario")[0].reset();
    });

    // Oculta a mensagem de aviso após alguns segundos
    $('#msg').bind("DOMSubtreeModified", function () {
        window.setTimeout(function () {
            $(".alert").fadeTo(500, 0).slideUp(500, function () {
                $(this).remove();
            });
        }, 5000);
    });

    // Preenche o formulário quando o usuario clicar em uma linha da tabela 
    $("#grid-usuarios").on("click", "tr", function (e) {
        let linhaUsuario = this;
        colunas = linhaUsuario.querySelectorAll("td");

        $("#inputId").val(colunas[0].innerText);
        $("#inputNome").val(colunas[1].innerText);
        $("#inputEmail").val(colunas[2].innerText);
        $("#inputCpf").val(colunas[3].innerText);
        $("#inputTelefone").val(colunas[4].innerText);
        $("#inputRua").val(colunas[5].innerText);
        $("#inputNumero").val(colunas[6].innerText);
        $("#inputComp").val(colunas[7].innerText);
        $("#inputCidade").val(colunas[8].innerText);
        $("#inputEstado").val(colunas[9].innerText);
        $("#inputSenha").val(colunas[10].innerText);
    });

    exibeUsuarios();
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_usuario'));

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertUsuario(usuario) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.data.length != 0) 
      novoId = db.data[db.data.length - 1].id + 1;
    let novoUsuario = {              
        "id": novoId,
        "nome": usuario.nome,    
        "email" : usuario.email,
        "cpf": usuario.cpf,
        "telefone": usuario.telefone,
        "rua": usuario.rua,
        "numero": usuario.numero,
        "bairro": usuario.bairro,
        "cidade" : usuario.cidade,
        "estado": usuario.estado,
        "senha": usuario.senha
    };


    // Insere o novo objeto no array
    db.data.push(novoUsuario);
    displayMessage("Usuário inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_usuario', JSON.stringify(db));
}

function updateUsuario(id, usuario) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].nome = usuario.nome,
    db.data[index].email = usuario.email,
    db.data[index].cpf = usuario.cpf,
    db.data[index].telefone = usuario.telefone,
    db.data[index].rua = usuario.rua,
    db.data[index].numero = usuario.numero,
    db.data[index].bairro = usuario.bairro,
    db.data[index].cidade = usuario.cidade,
    db.data[index].estado = usuario.estado,
    db.data[index].senha = usuario.senha

    displayMessage("Usuário alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_usuario', JSON.stringify(db));
}

function deleteUsuario(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Usuário removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_usuario', JSON.stringify(db));
}