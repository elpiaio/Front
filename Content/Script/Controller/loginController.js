var login_controller = {
    login : LoginCliente,
    start:function(){
        var btnlogin = document.querySelector("#buttonSend")
        // Remove qualquer manipulador de evento de clique existente
        btnlogin.removeEventListener('click', login_controller.login);
        // Define um novo manipulador de evento de clique
        btnlogin.addEventListener('click', login_controller.login);
    }
}

function LoginCliente(){
    const body = {
        email : document.querySelector("#LoginEmail").value,
        senha : document.querySelector("#LoginSenha").value
    }
    
    login_api.login(body, function(result){
        if(result == null){
            alert('usuário ou senha incorreto!')
            return;
        }
        window.location.href = 'home.html';
    });
}
        
