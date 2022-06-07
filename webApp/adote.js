dados = buscaDadosLocalStorage();
renderizaDadosNosCards(dados);

function buscaDadosLocalStorage() {
    return JSON.parse(localStorage.getItem("__dados__"));
}

function atualizaLocalStorage(dados) {
    localStorage.setItem("__dados__", JSON.stringify(dados))
}

function renderizaDadosNosCards(itens) {
    if(!itens) {
        return;
    }

    const linha = document.getElementById("linha-cards");
    dados.forEach(item => {
        console.log(item);

        let divUm = document.createElement("div");
        divUm.className = "col-12 col-md-4 col-md-4 my-3";

        let divDois = document.createElement("div");
        divDois.className = "card";
        divUm.append(divDois)

        let img = document.createElement("img");
        img.className = "img-fluid";
        img.style = "height: 100%";
        img.src = item.Imagem;
        divDois.append(img);


        let divTres = document.createElement("div");
        divTres.className = "card-body";
        divDois.append(divTres)

        let h5 = document.createElement("h5");
        h5.className = "card-title";
        h5.innerText = item.Nome;
        divTres.append(h5)

        let p = document.createElement("p");
        p.className = "card-text";
        p.innerHTML = `
            <b>Idade:</b> ${item.Idade}
            <br>
            <b>Sexo:</b> ${item.Sexo}
            <br> 
            <b>Porte:</b> ${item.Porte}
        `
        divTres.append(p);

        linha.append(divUm);
    });
}

