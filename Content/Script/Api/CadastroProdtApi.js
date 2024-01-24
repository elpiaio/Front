var cadastroProdt_api = {
    cadastroProduto : CadastroProduto
}

function CadastroProduto(parametros, callback) { 
        HttpPost(
        'Produto/CadastrandoProduto',
        parametros,
        function (result) {
            callback(result);
        }, function (ex) {
            console.log(ex.message)
        }
    );
}