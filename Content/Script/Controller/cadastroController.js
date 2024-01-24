var cadastro_controller = {
    cadastro : CadastroCliente,
    start : function(){ //praque
        var btncadastro = document.querySelector("#buttonCadastro")
        // Remove qualquer manipulador de evento de clique existente
        btncadastro.removeEventListener('click', cadastro_controller.cadastro);
        // Define um novo manipulador de evento de clique
        btncadastro.addEventListener('click', cadastro_controller.cadastro);
     }
}

function CadastroCliente(){
    const body = {
        Nome : document.querySelector("#NomeCadastro").value,
        Email : document.querySelector("#EmailCadastro").value,
        Senha : document.querySelector("#SenhaCadastro").value
    }

    if(body.Nome == "" || body.Email == "" || body.Senha == "")
       {
        alert("preencha os campos!")
        return;
    }else{
    
        cadastro_api.cadastro(body, function(result){
            window.alert("Foi criado cadastrado com suscesso");
            window.location.href = 'login.html';
        });
    }
}

/*
 const body = {
        Nome : document.querySelector("#NomeCadastro").value,
        Email : document.querySelector("#EmailCadastro").value,
        Senha : document.querySelector("#SenhaCadastro").value
    }

    if(body.Nome == "" || body.Email == "" || body.Senha == "")
       {
        alert("preencha os campos!")
        return;
    }else{
    
        cadastro_api.cadastro(body, function(result){
            window.alert("Foi criado cadastrado com suscesso");
            window.location.href = 'login.html';
        });
    }
*/