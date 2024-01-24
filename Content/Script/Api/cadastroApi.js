var cadastro_api = {
    cadastro : CadastroCliente
}

function CadastroCliente(parametros, callback) { 
        HttpPost(
        'Cliente/CadastrandoCliente',
        parametros,
        function (result) {
            callback(result);
        }, function (ex) {
            console.log(ex.message)
        }
    );
}