const tarea=document.getElementById("tarea")
const fecha=document.getElementById("fecha")
const boton=document.getElementById("guardar")
const tareas=document.getElementById("tareas")
let caja = document.getElementById("contenedor");

caja.addEventListener("mouseover", function() {
    caja.style.backgroundColor = "blue";
});

caja.addEventListener("mouseout", function() {
    caja.style.backgroundColor = "red";
});


            
// agregar un evento
boton.addEventListener("click",guardartarea);
document.addEventListener("keydown", function(evento) {
    console.log("Tecla presionada: " + evento.key);
    if(evento.key=="Enter"){
        guardartarea()
    }
});

function guardartarea(){
    let txttarea = tarea.value
    let txtfecha = fecha.value

    console.log(txtfecha)
    console.log(txttarea)

    const nuevatarea = document.createElement('li');
    nuevatarea.innerHTML = "<h1>" + txttarea + "</h1><p>" + txtfecha + "</p>"
    tareas.appendChild(nuevatarea)


}

