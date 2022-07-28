const inputTexto = document.querySelector(".input-text");
const mensaje = document.querySelector(".output-text");

function btnencriptar(){
    if (checkType(inputTexto.value)) {
        document.getElementById("alerta").style.display = "block";
        eraseText();
        
    }else{
        let textoEncriptado = encriptar(inputTexto.value);
        mensaje.value = textoEncriptado;
    };
};
function eraseText() {
    document.getElementById("ingreso-texto").value = "";
}
function encriptar(StringParaEncriptar){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    StringParaEncriptar = StringParaEncriptar.toLowerCase();
    for (let i= 0; i < matrizCodigo.length; i++){
        if (StringParaEncriptar.includes(matrizCodigo[i][0])){
            StringParaEncriptar = StringParaEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return StringParaEncriptar;
};

function btnDesencriptar(){
    let textoDesencriptado = desencriptar(mensaje.value);
    inputTexto.value = textoDesencriptado;
};
function desencriptar(StringParaDesencriptar) {
    let matrizCodigo = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
    StringParaDesencriptar = StringParaDesencriptar.toLowerCase();
    for (let i= 0; i < matrizCodigo.length; i++){
        if (StringParaDesencriptar.includes(matrizCodigo[i][0])){
            StringParaDesencriptar = StringParaDesencriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return StringParaDesencriptar;

}
function checkType(string) {
        let booleano = false;
        const regxs = /^[A-Z0-9]+$/
        if (regxs.test(string == undefined) || regxs.test(string == null)){            
            return null;
        }else if (regxs.test(string)) {
            booleano = true;
            return booleano;
        }
        else{
            return booleano;
        };
    };

    /*console.log(checkType());*/

    /*const isUpperCase = (string) => /^[A-Z]*$/.test(string);*/
