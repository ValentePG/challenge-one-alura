import criptografar from '/components/criptografia/index.js'
import descriptografar from '/components/descriptografia/index.js'
import copiarTextoDoUsuario from '/components/copiarTexto/index.js';

const criptografador = document.querySelector('.criptografar');
criptografador.addEventListener('click', criptografar);

const descriptografador = document.querySelector('.criptografar');
descriptografador.addEventListener('click', descriptografar);

