var login_api = {
    login : LoginCliente
}

function LoginCliente(parametros, callback) {
    HttpPost(
        'Cliente/LoginCliente/login',
        parametros,
        function (result) {
            callback(result);
        }
    );
}