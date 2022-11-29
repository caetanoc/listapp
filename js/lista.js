let tablista = document.querySelector("#tabela")
let btnAdicionar = document.querySelector("#btnAdd");

btnAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    let form = document.querySelector("#form-add");
    let produto = obtemProdForm(form);

    adicionaProd(produto);
    form.reset();
});

function obtemProdForm(form) {
    var produto = {
        nome: form.nome.value,
    }
    return produto;
}

function adicionaProd(produto) {
    let td = document.createElement("td")
    td.classList.add("info-nome")
    td.textContent = produto.nome

    let prodTr = document.createElement("tr")
    prodTr.classList.add("itemProduto")

    prodTr.appendChild(td)
    tablista.appendChild(prodTr)
}

tablista.addEventListener("click", function(event) {
    event.target.classList.toggle("riscado")
  })

function limparRiscados() {
    let produto = document.querySelectorAll(".itemProduto");

    let itens = document.querySelectorAll(".info-nome");
    itens.forEach(element => {
        if (element.classList.contains('riscado')) {
            element.remove();
        }
    });
}

function limparLista(){
    tablista.innerHTML = ""
} 
 