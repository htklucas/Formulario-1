function Registro(){
    let nomeUsuario = document.getElementById('nome').value;
    let emailUsuario = document.getElementById('email').value;
    let senhaUsuario = document.getElementById('password').value;
    let anoUsuario = document.getElementById('date').value;

    let estadocivilUsuario = document.querySelector("input[name='estado_civil']:checked").value;

    alert(`Nome: ${nomeUsuario}\nEmail: ${emailUsuario}\nSenha: ${senhaUsuario}\nAno nasc: ${anoUsuario}\nEstado Civil: ${estadocivilUsuario}`);

    window.location.href='../telaBemvindo/sitePos.html'
}



function Voltar(){
    window.location.href='../formulario/formulario.html'
}