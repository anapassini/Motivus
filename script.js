function formulario(event) {
    

    // Pegar os valores dos inputs
    let valorNome = document.getElementById("name").value
    let valorEmail = document.getElementById("email").value
    let valorDescricao = document.getElementById("comment").value

    // Organizar os valores em um objeto
    let dadosForm = {
        nome: valorNome,
        email: valorEmail,
        descricao: valorDescricao
    }

    // Enviar a requisição para a API
    // Método HTTP POST - Create/Criar -> Cadastrar um novo registro (solicitacao)
    fetch("http://localhost:3000/formulario", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosForm)
    })
    // CASO SUCESSO
    .then(resposta => {   
        console.log(resposta);     
        
        // Limpar os inputs
        document.querySelector(".form").reset()

        // Mostrar um alert de sucesso
        alert("Solicitação enviada com sucesso!!! 👍")
    })
    // CASO ERRO
    .catch(erro => {
        console.log(erro);
        // Mostrar alert com msg de erro
        alert("Erro na requisição 😢")
    })
          
    event.preventDefault()
}