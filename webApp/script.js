var dados = [

]
localStorage.setItem("__dados__", JSON.stringify(dados))
renderDataInTheTable(JSON.parse(localStorage.getItem("__dados__")))

function cdsanimais() {
    if (Array.isArray(dados)) {

        localStorage.setItem("__dados__", JSON.stringify(dados))

        $("#tbldados tbody").html("")

        dados.forEach(function (item) {

            // template string
            $("#tbldados tbody").append(`<tr>
        <tr>${item.ID}</td>
        <tr>${item.Nome}</td>
        <tr>${item.Idade}</td>
        <tr>${item.Porte}</td>
        <tr>${item.Sexo}</td>
        <tr>${item.Descrição}</td>  
        <td><button type="button" class="btn btn-primary"></button></td>
        <td><button type="button" class="btn btn-danger"></button></td>
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


$(function () {
    //Executa ao carregar a tela 
    dados = JSON.parse(localStorage.getItem("__dados__"))
    if (dados) {
        cdsanimais()
    }

    $("#btnSalvar").click(function () {
        //Evento click do botão salvar

        let Nome = $("#txtNome").val()
        let Idade = $("#txtIdade").val()
        let Porte = $("#txtPorte").val()
        let Sexo = $("#txtSexo").val()
        let Descricao = $("#txtDescrição").val()


        let registro = {}
        registro.id = Math.floor(Math.random() * 10)
        registro.Nome = Nome
        registro.Idade = Idade
        registro.Porte = Porte
        registro.Sexo = Sexo
        registro.Descrição = Descricao



        dados.push(registro)
        localStorage.setItem("__dados__", JSON.stringify(dados))
        renderDataInTheTable(dados)

        alert("Registro salvo com sucesso")
        $("#modalRegistro").modal("hide")

        //Limpeza dos campos 

        $("#txtNome").val("")
        $("#txtIdade").val("")
        $("#txtPorte").val("")
        $("#txtSexo").val("")
        $("#txtDescrição").val("")

        cdsanimais()


    })
})














