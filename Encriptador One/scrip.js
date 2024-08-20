const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje-area");
const regex = /[A-Z0-9\W]/g;

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

//esta funcion sirve para saber si el texto ingresado tiene algun signo espacio o esta vacio retorna un booleano
function validarTexto(texto) {

    if (regex.test(texto) || texto == "") {
        alert("El texto contiene números, signos o esta vacio. Por favor, corríjalo.");
        return false;
    } else {
        texto = "";
        return true;
    }
}
//esta funcion encapsula la informacion en una variable y la envia a otra funcion a validar
function btnEncriptar() {
    const textoValidado = validarTexto(textArea.value);

    if (true == textoValidado) {
        const textoEncriotado = encriptar(textArea.value);

        mensaje.value = textoEncriotado;
        comprobadorParametros(validarTexto(textoEncriotado));
    } else {
        textoEncriotado = "";
    }

}
//esta funcion sirve para encriptar el texto
function encriptar(stringEncriptado) {

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }

    }

    return stringEncriptado
}
//esta funcion encapsula la informacion en una variable y la envia a otra funcion a validar
function btnDesencriptar() {
    const textoValidado = validarTexto(textArea.value);

    if (true == textoValidado) {
        const textoDesencriotado = desencriptar(textArea.value);

        mensaje.value = textoDesencriotado;
        comprobadorParametros(validarTexto(textoDesencriotado));
    } else {
        textoDesencriotado = "";
    }

}
//esta funcion decencripta el texto
function desencriptar(stringDesencriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }

    }
    return stringDesencriptado
}
//esta funcion se dedica a comprueba atrabes de un booleano si muestra la imagen o no, borra el texto, o muesta o no el boton copiar
function comprobadorParametros(comprobador) {
    if (comprobador == true) {
        textArea.value = "";
        mensaje.style.backgroundImage = 'none';
        document.getElementById("btn-copiar").style.display = 'block';
    } else {
        mensaje.style.backgroundImage = 'url(imagenes/Muñeco.png)';
        document.getElementById("btn-copiar").style.display = 'none';
    }
}
// esta funcion de dedica al guardado de del texto atraves del boton copiar y guardarlo en una variable
function btnCopiar() {
    const textoCopaido = mensaje.value;
    navigator.clipboard.writeText(textoCopaido);
    alert("el texto se copio con exito");
    mensaje.value = "";
    comprobadorParametros(false);

}
//esta funcion se dedica al cambio de estilo de la pagina atravez de las variables Css
function cambiarColor(valor) {
    if (valor == 1) {
        document.documentElement.style.setProperty('--color-primario1', '#522258');
        document.documentElement.style.setProperty('--color-secundario2', '#8C3061');
        document.documentElement.style.setProperty('--color-tercero3', '#C63C51');
        document.documentElement.style.setProperty('--color-cuarto4', '#D95F59');
    }
    if (valor == 2) {
        document.documentElement.style.setProperty('--color-primario1', '#F6E96B');
        document.documentElement.style.setProperty('--color-secundario2', '#BEDC74');
        document.documentElement.style.setProperty('--color-tercero3', '#A2CA71');
        document.documentElement.style.setProperty('--color-cuarto4', '#387F39');
    }
    if (valor == 3) {
        document.documentElement.style.setProperty('--color-primario1', '#1E201E');
        document.documentElement.style.setProperty('--color-secundario2', '#3C3D37');
        document.documentElement.style.setProperty('--color-tercero3', '#697565');
        document.documentElement.style.setProperty('--color-cuarto4', '#ECDFCC');
    }

}