var cadastroProdt_controller = {
    cadastroProduto : CadastroProduto,
    start : function(){ //praque
        var btncadastroProdt = document.querySelector("#buttonCadastroProdt")
        // Remove qualquer manipulador de evento de clique existente
        btncadastroProdt.removeEventListener('click', cadastroProdt_controller.cadastroProduto);
        // Define um novo manipulador de evento de clique
        btncadastroProdt.addEventListener('click', cadastroProdt_controller.cadastroProduto);
     },
}

function CadastroProduto(){
    const body = {
        Nome : document.querySelector("#NomeProduto").value,
        Descricao : document.querySelector("#DescricaoProduto").value,
        Imagem : document.querySelector("#ImagemProduto").value,
        Preco : document.querySelector("#PrecoProduto").value,
        Quantidade : document.querySelector("#QuantidadeProduto").value
    }

    if(body.Nome == "" || body.Descricao == "" || body.Imagem == ""|| body.Preco == ""|| body.Quantidade == "")
       {
        window.alert("preencha os campos!")
    }else{
    
        cadastroProdt_api.cadastroProduto(body, function(result){
            window.alert("Foi criado cadastrado com suscesso");
            
        });
    }
}