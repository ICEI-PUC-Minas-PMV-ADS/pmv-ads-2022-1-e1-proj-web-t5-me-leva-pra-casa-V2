'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => {
    clearFields() 
    document.getElementById('modal').classList.remove('active')
}

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? []
const setLocalStorage = (dbClient) => localStorage.setItem("db_client", JSON.stringify (dbClient))
//CRUD

    const createClient = (client) =>{
        const dbClient = getLocalStorage()
        dbClient.push (client)
        setLocalStorage(dbClient)
    }

    const readClient = () => getLocalStorage()
    
    const updateClient = (index, client) =>{
        const dbClient = readClient() 
        dbClient[index] = client
        setLocalStorage(dbClient)
        updateTable()
    }

    const deleteClient = (index,) =>{
        const dbClient = readClient()
        dbClient.splice (index, 1)
        setLocalStorage(dbClient)
        updateTable()
    }

//Função de interatividade
const isValideFields = () =>{
    return document.getElementById("form").reportValidity()
}

const clearFields = () =>{
    const fields = document.querySelectorAll('.modal-field')
    fields.forEach(field => field.value = "")
}

//Interação com o Layout
const saveClient = () =>{
    if (isValideFields()){
        console.log("cliente cadastrado")
        const client = {
            nome: document.getElementById("nome").value,
            email: document.getElementById("email").value,
            celular: document.getElementById("celular").value,
            cidade: document.getElementById("cidade").value
        }
        const index = document.getElementById("nome").dataset.index
        if(index == "new"){
            createClient(client)
            clearFields()
            closeModal()
            updateClient()
            updateTable()
        }
        else{
            updateClient(index, client)
            updateTable()
            closeModal()
        }
    }
}

const createRow = (client, index) =>{
    const newRow = document.createElement("tr")
    newRow.innerHTML = `
    <td>${client.nome}</td>
    <td>${client.email}</td>
    <td>${client.celular}</td>
    <td>${client.cidade}</td>
    <td>
        <button type="button" class="button btn-warning" id="edit-${index}">Editar</button>
        <button type="button" class="button btn-danger" id="delete-${index}">Excluir</button>
    </td>
    `
    document.querySelector('#tableClient>tbody').appendChild(newRow)
}

const clearTable = () =>{
    const rows = document.querySelectorAll('#tableClient>tbody tr')
    rows.forEach(row => row.parentNode.removeChild(row))
}

const updateTable = () =>{
    clearTable()
    const dbClient = readClient()
    dbClient.forEach (createRow)
}

const fillFields= (client) =>{
    document.getElementById("nome").value = client.nome
    document.getElementById("email").value = client.email
    document.getElementById("celular").value = client.celular
    document.getElementById("cidade").value = client.cidade
    document.getElementById("nome").dataset.index = client.index
}

const editClient = (index) =>{
    const client = readClient()[index]
    client.index = index
    fillFields(client)
    openModal()
}

const editDelete = (event) =>{
    if(event.target.type == "button"){
        const [action, index] = event.target.id.split('-')
        
        if(action == 'edit'){
            console.log ("editando o cliente")
            editClient(index)
        }
        else{
            const client = readClient()[index]
            const response = confirm (`Deseja realmente excluir o cliente ${client.nome} ?`)
            if (response)
            {
                deleteClient(index)
                updateTable()
            }
        }
    }
}
updateTable()
//Eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

document.getElementById('salvar')
    .addEventListener('click', saveClient)

document.querySelector('#tableClient>tbody')
    .addEventListener('click', editDelete)