// declara um conjunto inicial de contatos
var db_usuarios_inicial = {
    "data": []
}

function exibeUsuarios() {
    // Remove todas as linhas do corpo da tabela
    $("#table-usuarios").html("");

        let usuario = usuarioCorrente; 
    // Popula a tabela com os registros do banco de dados 
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

function init() {

    usuarioCorrenteJSON = sessionStorage.getItem('usuarioCorrente');
    usuarioCorrente = JSON.parse (usuarioCorrenteJSON);

    usuariosJSON = localStorage.getItem('db_usuario');
    db_usuario = JSON.parse(usuariosJSON);   
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
        updateUsuario(campoId, usuario);
        

        // Reexibe os usuários
        exibeUsuarios();

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
        window.location.href = "/webApp/home.html"
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

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
        $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
    }


function updateUsuario(campoId, usuario) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu cpf
    var db = JSON.parse(localStorage.getItem('db_usuario'));
    let index = db.data.map(obj => obj.campoId).indexOf(campoId);
    // Altera os dados do objeto no array
    usuarioCorrente.nome = usuario.nome,
    usuarioCorrente.email = usuario.email,
    usuarioCorrente.cpf = usuario.cpf,
    usuarioCorrente.telefone = usuario.telefone,
    usuarioCorrente.rua = usuario.rua,
    usuarioCorrente.numero = usuario.numero,
    usuarioCorrente.bairro = usuario.bairro,
    usuarioCorrente.cidade = usuario.cidade,
    usuarioCorrente.estado = usuario.estado,
    usuarioCorrente.senha =  usuario.senha,

    db.data[index] = usuarioCorrente;

    displayMessage("Usuário alterado com sucesso");

    // Atualiza os dados no Local Storage
    sessionStorage.setItem ('usuarioCorrente', JSON.stringify (usuarioCorrente));
    localStorage.setItem('db_usuario', JSON.stringify(usuarioCorrente));

}

function deleteUsuario(campoId) {    
    // Filtra o array removendo o elemento com o id passado
    usuarioCorrente = usuarioCorrente.filter(function (element) { return element.campoId != campoId });

    displayMessage("Usuário removido com sucesso");

    // Atualiza os dados no Local Storage
    sessionStorage.setItem('usuarioCorrente', JSON.stringify(usuarioCorrente));
    localStorage.setItem('db_usuario', JSON.stringify (usuarioCorrente));
}