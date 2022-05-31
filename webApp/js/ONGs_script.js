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
//     });
// });

'use strict''

const openModal = () => document.getElementById('modal')
.classList.add('active')

const closeModal = () => document.getElementById('modal')
.classList.add('active')



//CRUD - create read update delete

const createClient = (client) => {
    localStorage.setItem("teste", "teste para o crud")
}


// eventos
document.getElementById('exampleModal')
.addEventListener('click', openModal)

Document.getElementById('exampleModal1')
.addEventListener('click, closeModal')