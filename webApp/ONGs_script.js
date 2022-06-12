// var isLogged = false
// $(document).ready(function () {
//     $("#peitinho").click(function () {
//         if (isLogged) {
//             $("#exampleModal").modal('show');
//             console.log("USUARIO LOGADO");
//         } else {
//             $("#exampleModal1").modal('show');
//             console.log("USUARIO NÃ0 LOGADO");
//         }
// //     });
// // });

// 'use strict''

// const openModal = () => document.getElementById('modal')
// .classList.add('active')

// const closeModal = () => document.getElementById('modal')
// .classList.add('active')



// //CRUD - create read update delete

// const createClient = (client) => {
//     localStorage.setItem("teste", "teste para o crud")
// }


// // eventos
// document.getElementById('exampleModal')
// .addEventListener('click', openModal)

// Document.getElementById('exampleModal1')
// .addEventListener('click, closeModal')

// var dados = [

// ]
// localStorage.setItem("__dados__", JSON.stringify(dados))
// renderDataInTheTable(JSON.parse(localStorage.getItem("__dados__")))

// function cdsanimais() {
//     if (Array.isArray(dados)) {

//         localStorage.setItem("__dados__", JSON.stringify(dados))

//         $("#tbldados tbody").html("")

//         dados.forEach(function (item) {

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
    console.log('PASSOU AQUI NO LOAD')
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
            var elemRow = document.getElementById("ongsRow0");
            elemRow.style.display = "flex"
            var elemRow = document.getElementById("ongsRow1");
            elemRow.style.display = "flex"
            var elemRow = document.getElementById("ongsRow2");
            elemRow.style.display = "flex"
            var elemRow = document.getElementById("ongsRow3");
            elemRow.style.display = "flex"
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



