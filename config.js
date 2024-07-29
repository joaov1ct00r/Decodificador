function criptografar() {
    var texto = document.getElementById('meuTextarea').value;

    
    var resultCripto = texto.replace(/e/g, "enter")
                            .replace(/i/g, "imes")
                            .replace(/a/g, "ai")
                            .replace(/o/g, "ober")
                            .replace(/u/g, "ufat");

    document.getElementById('resultado-cripto').innerHTML = `
        <textarea readonly id="input-texto">${resultCripto}</textarea>
        <button class="btn-copiar" onclick="copiar()">Copiar</button>
    `;

   
    document.getElementById('robo').style.display = 'none';
    document.getElementById('texto1').style.display = 'none';
    document.getElementById('texto2-container').style.display = 'none';
}

function descriptografar() {
    var texto = document.getElementById('meuTextarea').value;

    
    var resultDescripto = texto.replace(/enter/g, "e")
                               .replace(/imes/g, "i")
                               .replace(/ai/g, "a")
                               .replace(/ober/g, "o")
                               .replace(/ufat/g, "u");

    document.getElementById('resultado-cripto').innerHTML = `
        <textarea readonly id="input-texto">${resultDescripto}</textarea>
        <button class="btn-copiar" onclick="copiar()">Copiar</button>
    `;

    
    document.getElementById('robo').style.display = 'none';
    document.getElementById('texto1').style.display = 'none';
    document.getElementById('texto2-container').style.display = 'none';
}

function copiar() {
    var textoCop = document.getElementById('input-texto');

    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado");
}

