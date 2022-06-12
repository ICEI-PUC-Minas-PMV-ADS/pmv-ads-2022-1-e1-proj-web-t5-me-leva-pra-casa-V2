// INICIO - DECLARA OS DADOS INICIAIS DE ONGS
var db_ongs_inicial = {
    "data": [
        {
            "id": 1,
            "imagemONG": "https://blog.esolidar.com/wp-content/uploads/2020/05/ONG-confiavel-como-transmitir-a-sua-mensagem.png",
            "nomeONG": "NOME DA ONG LOCAL STORAGE 1",
            "descONG": "This is a wider card with supporting text below as a natural lead-in to additional content",
            "textoBotaoONG": "Doação"
        },
        {
            "id": 2,
            "imagemONG": "https://logos.flamingtext.com/City-Logos/Ong-Sketch-Logo.png",
            "nomeONG": "NOME DA ONG LOCAL STORAGE 2",
            "descONG": "This is a wider card with supporting text below as a natural lead-in to additional content",
            "textoBotaoONG": "Doação"
        },
        {
            "id": 3,
            "imagemONG": "https://envolverde.com.br/wp-content/uploads/ongs_2.jpg",
            "nomeONG": "NOME DA ONG LOCAL STORAGE 3",
            "descONG": "This is a wider card with supporting text below as a natural lead-in to additional content",
            "textoBotaoONG": "Doação"
        },
        {
            "id": 4,
            "imagemONG": "https://blog.esolidar.com/wp-content/uploads/2020/05/ONG-confiavel-como-transmitir-a-sua-mensagem.png",
            "nomeONG": "NOME DA ONG LOCAL STORAGE 4",
            "descONG": "This is a wider card with supporting text below as a natural lead-in to additional content",
            "textoBotaoONG": "Doação"
        },
        {
            "id": 5,
            "imagemONG": "https://blog.esolidar.com/wp-content/uploads/2020/05/ONG-confiavel-como-transmitir-a-sua-mensagem.png",
            "nomeONG": "NOME DA ONG LOCAL STORAGE 5",
            "descONG": "This is a wider card with supporting text below as a natural lead-in to additional content",
            "textoBotaoONG": "Doação"
        },
        {
            "id": 6,
            "imagemONG": "https://envolverde.com.br/wp-content/uploads/ongs_2.jpg",
            "nomeONG": "NOME DA ONG LOCAL STORAGE 6",
            "descONG": "This is a wider card with supporting text below as a natural lead-in to additional content",
            "textoBotaoONG": "Doação"
        },
        {
            "id": 7,
            "imagemONG": "https://logos.flamingtext.com/City-Logos/Ong-Sketch-Logo.png",
            "nomeONG": "NOME DA ONG LOCAL STORAGE 7",
            "descONG": "This is a wider card with supporting text below as a natural lead-in to additional content",
            "textoBotaoONG": "Doação",
        },
        {
            "id": 8,
            "imagemONG": "https://blog.esolidar.com/wp-content/uploads/2020/05/ONG-confiavel-como-transmitir-a-sua-mensagem.png",
            "nomeONG": "NOME DA ONG LOCAL STORAGE 8",
            "descONG": "This is a wider card with supporting text below as a natural lead-in to additional content",
            "textoBotaoONG": "Doação"
        }

    ]
}

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

window.addEventListener('load', function () {
    progressBarAnimation();
    inicializaDadosONGs();
})

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
            for (let i = 0; i < 4; i++) {
                var ongsid = 'ongsRow' + i;
                var elemRow = document.getElementById(ongsid);
                elemRow.style.display = "flex"
            }
        }
    }, 200);
}
// FIM - DECLARA OS DADOS INICIAIS DE ONGS

// INICIO -LOGADO OU NAO LOGADO
var buttonDonnationIdClicked = ""
function btnDonnationClick(id) {
    var isLogged = 'loggedIn'
    if (isLogged == 'loggedIn') {
        var elem = document.getElementById('modal-title-donnationModal');
        elem.innerText = "TESTE" // BUSCAR O NOME DA ONGS
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

$(function () {
    $("#btnConfirmar").click(function () {

        var elementvalordaDoacao = document.getElementById('valueDonation');

        var elementanexarComprovante = document.getElementById('anexarComprovante');

        var donateValue = elementvalordaDoacao.value

        if (donateValue == '0.00') {
            console.log("valor zerado - ERRO")
            var inputDonation = document.getElementById('valueDonation');
            inputDonation.after("<div class='invalid-feedback'> Para continuar a doação precisa ser maior que R$ 0,00 </div>")
            console.log("entrou ERRO: ")
        } else {

            $(this).prop("disabled", true);
            $(this).html(
                `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...`
            );

            // AQUI VAMOS SALVAR NO LOCAL STORAGE

            // VALOR DA DOACAO E COM PROVANTE

        }


        // $("#btnFetch").click(function() {
        //     // disable button

        //     // add spinner to button

        // });

        // var elem = document.getElementById('valueDonation');

        // var elemValorDoado = document.getElementById("valorDoado");


        // let Valordoado = $("#valorDoado").val()
        // let Anexarcomprovante = $("#txtIdade").val()



        // let registro = {}
        // registro.id = Math.floor(Math.random() * 10)
        // registro.Valordoado = Valordoado
        // registro.Anexarcomprovante = Anexarcomprovante


        // alert("Registro salvo com sucesso")
        // $("#exampleModal").modal("hide")

        // //Limpeza dos campos 

        // $("#txtValor").val("")
        // $("#txtAnexar").val("")

        // cds()
    })
})

// FIM - VALIDANDO MODAL DE DOACAO