// declara um conjunto inicial de contatos
var db_usuarios_inicial = {
    "data": [
        {
            "id": 1,
            "nome": "João Silva", 
            "email": "js@gmail.com",
            "cpf": "03146795721",
            "telefone": "010-692-6593", 
            "rua": "Av A", 
            "numero": "5",
            "bairro": "Centro",
            "cidade": "Londrina",
            "estado": "Paraná",
            "senha": "1234567"
                   
        },
        {
            "id": 2,
            "nome": "Maia Santos", 
            "email": "ms@gmail.com",
            "cpf": "03146572100",
            "telefone": "010-693-6593", 
            "rua": "Av Carandaí", 
            "numero": "308",
            "bairro": "Centro",
            "cidade": "Belo Horizonte",
            "estado": "Minas Gerais",
            "senha": "7654321"
        },
        {
            "id": 3,
            "nome": "Cleusa Souza", 
            "email": "cs@hotmail.com",
            "cpf": "02145572144",
            "telefone": "021-693-6593", 
            "rua": "Av Caju", 
            "numero": "30",
            "bairro": "Centro",
            "cidade": "Curvelo",
            "estado": "Minas Gerais",
            "senha": "7654322"
        }
       
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_usuario'));
if (!db) {
    db = db_usuarios_inicial
};

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