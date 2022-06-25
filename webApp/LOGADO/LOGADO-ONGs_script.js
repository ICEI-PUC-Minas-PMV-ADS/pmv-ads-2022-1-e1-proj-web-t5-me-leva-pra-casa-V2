// INICIO - DECLARA OS DADOS INICIAIS DE ONGS
var db_ongs_inicial = {
    "data": [
        {
            "id": 1,
            "imagemONG": "https://user-images.githubusercontent.com/103081069/175749174-c9dc84ff-195f-41da-a696-d689642f2b02.jpg",
            "nomeONG": "ONG VALORIZA VIDA",
            "descONG": "Associação de proteção e valorização da vida de gatos e cachorros. Aquidabã-SE @ONGVALORIZAVIDA",
            "textoBotaoONG": "Doação"
        },
        {
            "id": 2,
            "imagemONG": "https://user-images.githubusercontent.com/103081069/175749250-b5e45e74-bc2d-4dd4-bc1a-3c94663be996.jpg",
            "nomeONG": "ONG DOG E CAT",
            "descONG": "Atua principalmente no resgate de animais feridos ou em situação de risco. Ribeirão Preto-SP @ONGDOGECAT",
            "textoBotaoONG": "Doação"
        },
        {
            "id": 3,
            "imagemONG": "https://user-images.githubusercontent.com/103081069/175749298-11668304-6e4a-4650-a790-6c39fbb30f04.jpg",
            "nomeONG": "ONG GATO E CACHORRO",
            "descONG": "Oferecem condições e cuidados necessários para que possam se recuperar. Contagem-MG @ONGGATOECACHORRO",
            "textoBotaoONG": "Doação"
        },
        {
            "id": 4,
            "imagemONG": "https://user-images.githubusercontent.com/103081069/175749344-0c52455c-9f5a-429e-b04d-9a5fdc123696.jpg",
            "nomeONG": "ONG RESGATA ANIMAL",
            "descONG": "Tem como objetivo resgatar e acolher animais em situação de vulnerabilidade. Cotia-SP @ONGRESGATAANIMAL",
            "textoBotaoONG": "Doação"
        },
        {
            "id": 5,
            "imagemONG": "https://user-images.githubusercontent.com/103081069/175749392-ba863d76-2872-4443-b136-f5cc747e6c08.jpg",
            "nomeONG": "PROTEGER ANIMAIS",
            "descONG": "Foi criada para proteger, amar e cuidar dos gatos e cachorros de rua.Copacabana-RJ @PROTEGERANIMAIS",
            "textoBotaoONG": "Doação"
        },
        {
            "id": 6,
            "imagemONG": "https://user-images.githubusercontent.com/103081069/175749595-1312a99b-6846-4d8f-817e-3b11298bbb29.png",
            "nomeONG": "ONG PROTEÇÃO GATO",
            "descONG": "A ONG de proteção trabalha com a reabilitação de gatos e a posterior adoção. Atibaia-SP @ONGPROTECAOGATO",
            "textoBotaoONG": "Doação"
        },
        {
            "id": 7,
            "imagemONG": "https://user-images.githubusercontent.com/103081069/175749691-d524d6f3-78a1-4e20-b626-14fcb712dba5.jpg",
            "nomeONG": "SOS PET",
            "descONG": "Em 2017 um grupo de vizinhos se uniu para realizar resgates de cachorros e gatos abandonados. Parnaíba-SP @SOSPET",
            "textoBotaoONG": "Doação",
        },
        {
            "id": 8,
            "imagemONG": "https://user-images.githubusercontent.com/103081069/175749715-1cd5145f-66ea-4549-ad01-faa0369f0973.jpg",
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
    var currentUser = sessionStorage.getItem('usuarioCorrente')
    console.log("currentUser: "+ currentUser)
    if (currentUser != null) {
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
        inputDonation.after("Para continuar a doação precisa ser maior que R$ 0,00")
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
            location.href = "LOGADO-minha_conta_historico.html";
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