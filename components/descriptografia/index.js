import renderizarDiv from "/components/renderizarDiv/index.js";

export default function descriptografar(){

  const entradaUsuario = document.querySelector('#entrada_usuario');
  const entradaSubstituida = inverterLetras(entradaUsuario.value);
  renderizarDiv(entradaSubstituida)

}

function inverterLetras(entradaUsuario) {
  const inversao = {
    "ai": "a",
    "imes": "i",
    "enter": "e",
    "ober": "o",
    "ufat": "u"
  };
    
  const textoSubstituido = entradaUsuario.replace(/ai|imes|enter|ober|ufat/g, match => inversao[match])

  return textoSubstituido;

}