export default function criptografar() {
  const semMensagem = document.querySelector('.sem_mensagem');
  const comMensagem = document.querySelector('.saida_texto');
  const entradaUsuario = document.querySelector('#entrada_usuario');
  
  semMensagem.style.display = 'none'
  comMensagem.innerHTML = `<textarea name="texto" id="texto" cols="30" rows="10" class="com_mensagem" readonly>${entradaUsuario.value}</textarea>`
}

