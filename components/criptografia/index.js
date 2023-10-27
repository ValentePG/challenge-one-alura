export default function criptografar() {
  const comMensagem = document.querySelector('.saida_texto');
  const entradaUsuario = document.querySelector('#entrada_usuario');
  const textoSubstituido = substituirLetras(entradaUsuario.value);
  
  comMensagem.innerHTML = `
  <div class="com_mensagem">
    <textarea name="texto" id="texto" cols="30" rows="20" class="text-area" readonly>${textoSubstituido}</textarea>
    <button class="botao_fundo--claro copiar">Copiar</button>
  </div>`
}

function substituirLetras(entradaUsuario) {
  const substituicoes = {
    "a": "ai",
    "i": "imes",
    "e": "enter",
    "o": "ober",
    "u": "ufat"
  };
    
  const textoSubstituido = entradaUsuario.split('').map(char => {
    return substituicoes[char] || char;
  }).join('');

  return textoSubstituido;

}
