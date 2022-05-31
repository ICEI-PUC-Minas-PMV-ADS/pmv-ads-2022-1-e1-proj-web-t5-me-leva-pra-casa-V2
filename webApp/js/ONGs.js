var isLogged = false
$(document).ready(function () {
    $("#peitinho").click(function () {
        if (isLogged) {
            $("#exampleModal").modal('show');
            console.log("USUARIO LOGADO");
        } else {
            $("#exampleModal1").modal('show');
            console.log("USUARIO NÃ0 LOGADO");
        }
    });
});