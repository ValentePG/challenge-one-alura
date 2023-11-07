import renderizarDiv from "/components/renderizarDiv/index.js";

export default function criptografar() {

  const entradaUsuario = document.querySelector('#entrada_usuario');
  const entradaSubstituida = substituirLetras(entradaUsuario.value);
  renderizarDiv(entradaSubstituida)
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
