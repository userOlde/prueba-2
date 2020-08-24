var conta = 1;

function crearCajas() {
    var elemento = document.createElement("div");
    var text = document.createTextNode("Hola, soy la caja:" + conta++);

    elemento.appendChild(text);

    elemento.style.backgroundColor = "#ff8000";
    elemento.style.width = " 300px";
    elemento.style.height = " 300px";
    elemento.style.marginTop = "20px";
    elemento.style.marginBottom = "20px";
    // elemento.style.marginLeft = "20px";
    elemento.style.display = "inline-block";
    elemento.style.marginRight = "50px"


    document.getElementById("caja").appendChild(elemento);

}