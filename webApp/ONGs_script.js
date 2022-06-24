// INICIO - DECLARA OS DADOS INICIAIS DE ONGS
var db_ongs_inicial = {
    "data": [
        {
            "id": 1,
            "imagemONG": "https://user-images.githubusercontent.com/103081069/175186412-35566c39-d73b-4a8a-a529-b482e64146a3.jpg",
            "nomeONG":"ONG VALORIZA VIDA",
            "descONG": "Associação de proteção e valorização da vida de gatos e cachorros. Aquidabã-SE @ONGVALORIZAVIDA",
            "textoBotaoONG": "Doação"
        },
        {
            "id": 2,
            "imagemONG": "https://user-images.githubusercontent.com/103081069/175185555-f43d433c-b004-4c0e-b69e-aecc26ce596f.jpg",
            "nomeONG": "ONG DOG E CAT",
            "descONG": "Atua principalmente no resgate de animais feridos ou em situação de risco. Ribeirão Preto-SP @ONGDOGECAT",
            "textoBotaoONG": "Doação"
        },
        {
            "id": 3,
            "imagemONG": "https://user-images.githubusercontent.com/103081069/175185697-0a78c481-60d4-466c-8080-918f0dd7cb55.jpg",
            "nomeONG": "ONG GATO E CACHORRO",
            "descONG": "Oferecem condições e cuidados necessários para que possam se recuperar. Contagem-MG @ONGGATOECACHORRO",
            "textoBotaoONG": "Doação"
        },
        {
            "id": 4,
            "imagemONG": "https://user-images.githubusercontent.com/103081069/175182973-b78ecb4a-5b3f-478b-b4b6-7e5d029160b7.jpg",
            "nomeONG": "ONG RESGATA ANIMAL",
            "descONG": "Tem como objetivo resgatar e acolher animais em situação de vulnerabilidade. Cotia-SP @ONGRESGATAANIMAL",
            "textoBotaoONG": "Doação"
        },
        {
            "id": 5,
            "imagemONG": "https://user-images.githubusercontent.com/103081069/175183247-929fec55-491d-4cf0-b7b3-f342fbda10be.jpg",
            "nomeONG": "PROTEGER ANIMAIS",
            "descONG": "Foi criada para proteger, amar e cuidar dos gatos e cachorros de rua.Copacabana-RJ @PROTEGERANIMAIS",
            "textoBotaoONG": "Doação"
        },
        {
            "id": 6,
            "imagemONG": "https://user-images.githubusercontent.com/103081069/175183986-7d0880a6-b60c-4213-b16f-27deb2552b94.jpg",
            "nomeONG": "ONG PROTEÇÃO GATO",
            "descONG": "A ONG de proteção trabalha com a reabilitação de gatos e a posterior adoção. Atibaia-SP @ONGPROTECAOGATO",
            "textoBotaoONG": "Doação"
        },
        {
            "id": 7,
            "imagemONG": "https://user-images.githubusercontent.com/103081069/175186071-f8357fcd-bfdc-45c7-855c-8ae0fd3a8462.jpg",
            "nomeONG":"SOS PET",
            "descONG": "Em 2017 um grupo de vizinhos se uniu para realizar resgates de cachorros e gatos abandonados. Parnaíba-SP @SOSPET",
            "textoBotaoONG": "Doação",
        },
        {
            "id": 8,
            "imagemONG": "https://user-images.githubusercontent.com/103081069/175184562-77132baf-c34d-4127-9286-784a286a3d26.jpg",
            "nomeONG": "ONG CENTRO DE DOACAO",
            "descONG": "Já foram realizadas muitas adoções ao longo dos anos de  gatos e cachorros. Itabuna-BA @ONGCENTRODEDOACAO",
            "textoBotaoONG": "Doação"
        }

    ]
}
var db_doacoes_inicial = {
    "data": [
        
    ]
}

var db_doacao = db_doacoes_inicial

var dbOngs = db_ongs_inicial

function inicializaDadosONGs() {
    localStorage.setItem('db_ongs', dbOngs);
    for (i = 0; i < dbOngs.data.length; i++) {
        let ong = dbOngs.data[i];

        var elemCardImg = document.getElementById("img-card-" + i);
        var elemCardTitle = document.getElementById("card-title-" + i);
        var elemCardDesc = document.getElementById("card-text-" + i);
        var elemCardButton = document.getElementById("btn-card-" + i);

        elemCardImg.src = ong.imagemONG
        elemCardTitle.innerText = ong.nomeONG
        elemCardDesc.innerText = ong.descONG
        elemCardButton.innerText = ong.textoBotaoONG
    }
}

var bodyId = document.body.id;
function loadPage() {
    progressBarAnimation();
    
    console.log("PASSOU PELO  loadPage: " + bodyId)
    if (bodyId == "ongs") {
        inicializaDadosONGs();
    } else {
        exibeDoacoes()
    }
}

var i = 0;
function progressBarAnimation() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("ongsProgressBar");
        var width = 1;
        var id = setInterval(frame, 5);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
        fadeOutEffectInProgressBar();
    }
}

function fadeOutEffectInProgressBar() {
    var elem = document.getElementById("progressId");

    var fadeEffect = setInterval(function () {
        if (!elem.style.opacity) {
            elem.style.opacity = 1;
        }
        if (elem.style.opacity > 0) {
            elem.style.opacity -= 0.1;
        } else {
            elem.style.display = "none"
            clearInterval(fadeEffect);
            if (bodyId == "ongs") {
                for (let i = 0; i < 4; i++) {
                    var ongsid = 'ongsRow' + i;
                    var elemRow = document.getElementById(ongsid);
                    elemRow.style.display = "flex"
                }
            }
        }
    }, 200);
}
// FIM - DECLARA OS DADOS INICIAIS DE ONGS

// INICIO -LOGADO OU NAO LOGADO
var buttonDonnationIdClicked = ""


function btnDonnationClick(id) {
    var isLogged = localStorage.getItem('usuarioCorrente')
    console.log("isLogged: "+ isLogged)
    if (isLogged != null) {
        var elem = document.getElementById('modal-title-donnationModal');
        let lastCharacterId = parseInt(id.slice(-1)); //btn-card-1
        let findId = lastCharacterId + 1
        for (i = 0; i < dbOngs.data.length; i++) {
            let ong = dbOngs.data[i];
            if (ong.id == findId) {
                elem.innerText = ong.nomeONG
            }
        }
        $("#donnationModal").modal('show');
    } else {
        $("#warningLoginModal").modal('show');
    }
    buttonDonnationIdClicked = id
}
// FIM -LOGADO OU NAO LOGADO

// INICIO - VALIDANDO MODAL DE DOACAO

function formatValue() {
    var elem = document.getElementById('valueDonation');
    var value = elem.value;

    value = value + '';
    value = parseInt(value.replace(/[\D]+/g, ''));
    value = value + '';
    value = value.replace(/([0-9]{2})$/g, ",$1");

    if (value.length > 6) {
        value = value.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
    }

    elem.value = value;
    if (value == 'NaN') elem.value = '0.00';
}

$(function () {
    $("#bntCancel").click(function () {
        var elem = document.getElementById('valueDonation');
        elem.value = '0.00'
    })
})

function btnConfirmDonnationClick(elem) {
    elem.prop("disabled", true);
}

var db_doacoes_inicial = {
    "data": [
        
    ]
}

function btnConfirmDonnationClick() {
    var buttonId = document.getElementById('btnConfirmar');
    var elemDonation = document.getElementById('valueDonation');
    var elemAttachment = document.getElementById('anexarComprovante');

    var donateValue = elemDonation.value
    var attachmentFileName = ""
    if (elemAttachment.files.length > 0) {
        console.log("entrou o comprovante: ")
        attachmentFileName = elemAttachment.files[0].name
    }
    
    var ongName = ""

    if (donateValue == '0.00') {
        console.log("valor zerado - ERRO")
        var inputDonation = document.getElementById('valueDonation');
        inputDonation.after("<div class='invalid-feedback'> Para continuar a doação precisa ser maior que R$ 0,00 </div>")
        console.log("entrou ERRO: ")
    } else {

        $(buttonId).prop("disabled", true);
        $(buttonId).html(
            `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...`
        );

        let lastCharacterId = parseInt(buttonDonnationIdClicked.slice(-1)); //btn-card-1
        let findId = lastCharacterId + 1
        for (i = 0; i < dbOngs.data.length; i++) {
            let ong = dbOngs.data[i];
            if (ong.id == findId) {
                ongName = ong.nomeONG
            }
        }

        var actualDate = new Date();
        var dd = String(actualDate.getDate()).padStart(2, '0');
        var mm = String(actualDate.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = actualDate.getFullYear();

        actualDate = mm + '/' + dd + '/' + yyyy;

        let randomId = Math.random()

        let novaDoacao = {              
            "id": randomId,
            "nomeONG": ongName,
            "valorDoado": donateValue,
            "date": actualDate,
            "nomeDoComprovante": attachmentFileName
        };
        console.log("vai salvar")

        var db = JSON.parse(localStorage.getItem('db_doacao'));
        console.log("DOACAO: "+db)
        if(db == null) { 
            localStorage.setItem('db_doacao', JSON.stringify(db_doacoes_inicial));
            var newDb = JSON.parse(localStorage.getItem('db_doacao'));
            db.data.push(novaDoacao);
        } else {
            db.data.push(novaDoacao);
        }
        localStorage.setItem('db_doacao', JSON.stringify(db));
        console.log("terminou de salvar: " + db.data.length)
        setTimeout(function(){
            location.href = "minha_conta_historico.html";
        }, 2000);
    }
    
}

// FIM - VALIDANDO MODAL DE DOACAO

function exibeDoacoes() {

    // limpartudo();
    let db = JSON.parse(localStorage.getItem('db_doacao'));
    console.log("entrou em exibeDoacoes: " + db.data.length)
    $("#table-doacoes").html("");
    // Popula a tabela com os registros do banco de dados
    for (i = 0; i < db.data.length; i++) {
        let doacao = db.data[i];
        $("#table-doacoes").append(`<tr><td scope="row">${doacao.id}</td>
                                        <td>${doacao.nomeONG}</td>
                                        <td>${doacao.valorDoado}</td>
                                        <td>${doacao.nomeDoComprovante}</td>
                                        <td>${doacao.date}</td>                                            
                                    </tr>`);
        console.log("BUSCOU: "+ doacao.nomeONG)
    }
}


function limpartudo() {
    localStorage.setItem('db_doacao', JSON.stringify(db_doacoes_inicial));
}