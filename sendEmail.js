function enviaEmail(){
    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;
    const mensagem = document.querySelector('#message').value;

    fetch('http://localhost:3000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome, email, mensagem })
      })
      .then(response => response.json())
      .then(data => {
        const insertHtml = `<span id="sucesso-mensagem">Sua mensagem foi enviada com sucesso!</span>`
        document.querySelector('.message').innerHTML = insertHtml
      })
      .catch(error => {
        const insertHtml = `<span id="erro-mensagem">Erro ao enviar mensagem!</span>`
        document.querySelector('.message').innerHTML = insertHtml
      });
}