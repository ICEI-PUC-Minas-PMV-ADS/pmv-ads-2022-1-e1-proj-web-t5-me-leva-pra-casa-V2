// DECLARA OS DADOS INICIAIS DE ONGS
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
    console.log('PASSOU AQUI NO inicializaDadosONGs')

    for (i = 0; i < dbOngs.data.length; i++) {
        let ong = dbOngs.data[i];    

        var elemCardImg = document.getElementById("img-card-"+i);
        var elemCardTitle = document.getElementById("card-title-"+i);
        var elemCardDesc = document.getElementById("card-text-"+i);
        var elemCardButton = document.getElementById("btn-card-"+i);

        
        elemCardImg.src= ong.imagemONG
        elemCardTitle.innerText = ong.nomeONG
        elemCardDesc.innerText = ong.descONG
        elemCardButton.innerText = ong.textoBotaoONG
        console.log("card-img "+i)
    }
}

var dados = [

]
localStorage.setItem("__dados__", JSON.stringify(dados))
renderDataInTheTable(JSON.parse(localStorage.getItem("__dados__")))

function cds() {
    if (Array.isArray(dados)) {

        localStorage.setItem("__dados__", JSON.stringify(dados))

        $("#informativos tbody").html("")

        dados.forEach(function (item) {

            // template string
            $("#informativos tbody").append(`<tr>
            <tr>${item.ID}</td>
            <tr>${item.Valordoado}</td>
            <tr>${item.Anexarcomprovante}</td>
            <td><button type="button" class="btn btn-secondary"></button></td>
            <td><button type="button" class="btn btn-primary"></button></td>
            </tr>`)
        })


    }
}

function renderDataInTheTable(todos) {
    const mytable = document.getElementById("tbldados");
    todos.forEach(todo => {
        let newRow = document.createElement("tr");
        Object.values(todo).forEach((value) => {
            let cell = document.createElement("td");
            cell.innerText = value;
            newRow.appendChild(cell);
        })
        mytable.appendChild(newRow);
    });
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
                console.log('PASSOU AQUI NO FOR..' + i)
                var ongsid = 'ongsRow' + i;
                var elemRow = document.getElementById(ongsid);
                elemRow.style.display = "flex"
            }
        }
    }, 200);
}

$(function () {
    //Executa ao carregar a tela 
    dados = JSON.parse(localStorage.getItem("__dados__"))
    if (dados) {
        cds()
    }

    $("#btnConfirmar").click(function () {
        //Evento click do botão Confirmar

        let Valordoado = $("#txtNome").val()
        let Anexarcomprovante = $("#txtIdade").val()



        let registro = {}
        registro.id = Math.floor(Math.random() * 10)
        registro.Valordoado = Valordoado
        registro.Anexarcomprovante = Anexarcomprovante




        dados.push(registro)
        localStorage.setItem("__dados__", JSON.stringify(dados))
        renderDataInTheTable(dados)

        alert("Registro salvo com sucesso")
        $("#exampleModal").modal("hide")

        //Limpeza dos campos 

        $("#txtValor").val("")
        $("#txtAnexar").val("")

        cds()


    })
})



