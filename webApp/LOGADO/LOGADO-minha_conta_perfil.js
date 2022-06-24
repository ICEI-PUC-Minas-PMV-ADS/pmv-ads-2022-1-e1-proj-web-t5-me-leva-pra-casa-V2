function exibeUsuarios() {
    // Remove todas as linhas do corpo da tabela
    $("#table-usuarios").html("");

        let usuario = usuarioCorrente.data[0]; 
    // Popula a tabela com os registros do banco de dados 
        $("#form-usuario").append(`<div class="form-group row mt-3">
                                    <div class="col-sm-4">
                                      <label for="inputId">Id</label>
                                      <input type="text" class="form-control form-meu-perfil" id="inputId" value="${usuario.id}" disabled>
                                    </div>
                                    <div class="col-sm-8">
                                      <label for="inputNome">Nome</label>
                                      <input type="text" class="form-control form-meu-perfil" id="inputNome" required
                                        value="${usuario.nome}">
                                    </div>
                                  </div>
                                  <div class="form-group row">
                                    <div class="col-sm-4">
                                      <label for="inputEmail">E-mail</label>
                                      <input type="email" class="form-control form-meu-perfil" id="inputEmail" required value="${usuario.email}">
                                    </div>
                                    <div class="col-sm-4">
                                      <label for="inputCpf">CPF</label>
                                      <input type="text" class="form-control form-meu-perfil" id="inputCpf" required value="${usuario.cpf}">
                                    </div>
                                    <div class="col-sm-4">
                                      <label for="inputTelefone">Telefone</label>
                                      <input type="text" class="form-control form-meu-perfil" id="inputTelefone" required
                                        value="${usuario.telefone}">
                                    </div>
                                  </div>
                                  <div class="form-group row">
                                    <div class="col-sm-4">
                                      <label for="inputRua">Endereço</label>
                                      <input type="text" class="form-control form-meu-perfil" id="inputRua" value="${usuario.rua}">
                                    </div>
                                    <div class="col-sm-4">
                                      <label for="inputNumero">Número</label>
                                      <input type="text" class="form-control form-meu-perfil" id="inputNumero" value="${usuario.numero}">
                                    </div>
                                    <div class="col-sm-4">
                                      <label for="inputBairro">Bairro</label>
                                      <input type="text" class="form-control form-meu-perfil" id="inputBairro" value="${usuario.bairro}">
                                    </div>
                                  </div>
                                  <div class="form-group row">
                                    <div class="col-sm-6">
                                      <label for="inputCidade">Cidade</label>
                                      <input type="text" class="form-control form-meu-perfil" id="inputCidade" value="${usuario.cidade}">
                                    </div>
                                    <div class="col-sm-6">
                                      <label for="inputEstado">Estado</label>
                                      <input type="text" class="form-control form-meu-perfil" id="inputEstado" value="${usuario.estado}">
                                    </div>
                                  </div>
                                  <div class="form-group row" style="text-align:center;">
                                  <div class="col-sm-12 mt-3 botoes">
                                    <input type="button" class="btn btn-warning botoes" id="btnUpdate" value="Alterar Dados">
                                    <input type="button" class="btn btn-danger botoes" style="margin-left: 20px;" id="btnDelete" value="Deletar Cadastro">
                                  </div>
                                </div>`);
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
        let usuario = { id: campoId,
            nome: campoNome, 
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
        $("#inputBairro").val(colunas[7].innerText);
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


function updateUsuario(id, usuario) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu cpf
    var db = JSON.parse(localStorage.getItem('db_usuario'));
    let index = db.data.map(obj => obj.id).indexOf(id);
    db.data[index] = usuario;
    usuarioCorrente.data[0] = usuario;

    displayMessage("Usuário alterado com sucesso");

    // Atualiza os dados no Local Storage
    sessionStorage.setItem ('usuarioCorrente', JSON.stringify (usuarioCorrente));
    localStorage.setItem('db_usuario', JSON.stringify(usuarioCorrente));

}

function deleteUsuario(id) {    
    // Filtra o array removendo o elemento com o id passado
    usuarioCorrente.data = usuarioCorrente.data.filter(function (element) { return element.id != id });

    displayMessage("Usuário removido com sucesso");
    window.location.href = "/webApp/home.html"
    // Atualiza os dados no Local Storage
    sessionStorage.setItem('usuarioCorrente', JSON.stringify(usuarioCorrente));
    localStorage.setItem('db_usuario', JSON.stringify (usuarioCorrente));
}