export default function renderizarDiv(entradaSubstituida) {
  const comMensagem = document.querySelector('.saida_texto');

  comMensagem.innerHTML = `
  <div class="com_mensagem">
    <textarea name="texto" id="texto" cols="30" rows="10" class="text-area" readonly>${entradaSubstituida}</textarea>
    <button class="botao_fundo--claro copiar">Copiar</button>
  </div>`
}
