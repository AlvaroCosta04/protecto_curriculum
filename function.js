/*const boton = document.querySelector("#numero_1");

boton.addEventListener("click",saludar);

function saludar(){
    alert("hola");
}*/
document.getElementById('primera compañia').onclick = function () {
    console.log("capturamos el evento click")
    document.getElementById("foto").innerHTML = '<img src="imagenn_empresa1.jpg"></img>';
    document.getElementById("info").innerHTML = '<h2 id="Nombre"> Empresa XYZ</h2>';
    document.getElementById("info_comp").innerHTML = "Finalmente, luego de 10 años como desarrollador de software, di el paso de manejar un cargo importante dentro de una empresa, con la posibilidad de dirigir varios proyectos durante mi estancia.<br> <br> Referencias:<br> +54-321-654-9876";
    document.getElementById("restablecer1").innerHTML = "Restablecer";

}

document.getElementById('segunda compañia').onclick = function () {
    console.log("capturamos el evento click")
    document.getElementById("foto").innerHTML = '<img src="imagen_cv.jpg"></img>';
    document.getElementById("info").innerHTML = '<h2 id="Nombre"> Empresa ABC</h2>';
    document.getElementById("info_comp").innerHTML = "Luego de 3 años como desarrollador, logrè obtener los conocimientos y sobre todo la experencia para dar mi paso a desarrollador senior.<br> <br> Referencias:<br> +54-818-567-9999";
    document.getElementById("restablecer2").innerHTML = "Restablecer";

}

document.getElementById('tercera compañia').onclick = function () {
    console.log("capturamos el evento click")
    document.getElementById("foto").innerHTML = '<img src="desarrollador_junior.jpeg"></img>';
    document.getElementById("info").innerHTML = '<h2 id="Nombre"> Empresa LMn</h2>';
    document.getElementById("info_comp").innerHTML = "Mis primeros pasos en el mundo laboral, aquì tuve el desafìo de demostrar mis conocimientos y a saber trabajar en equipo de manera eficiente.<br> <br> Referencias:<br> +54-111-123-7799";
    document.getElementById("restablecer3").innerHTML = "Restablecer";

}

document.getElementById('restablecer1').onclick = function () {
    document.getElementById("foto").innerHTML = '<img src="imagen_desarrollaorsenior.jpg">';
    document.getElementById("info").innerHTML = '<h2 id="Nombre"> Juan Perez<br><span>Desarrollador de software</span></h2>';
    document.getElementById("info_comp").innerHTML = " ";
    document.getElementById("restablecer1").innerHTML = "";
    document.getElementById("restablecer2").innerHTML = "";
    document.getElementById("restablecer3").innerHTML = "";
}

document.getElementById('restablecer2').onclick = function () {
    document.getElementById("foto").innerHTML = '<img src="imagen_desarrollaorsenior.jpg">';
    document.getElementById("info").innerHTML = '<h2 id="Nombre"> Juan Perez<br><span>Desarrollador de software</span></h2>';
    document.getElementById("info_comp").innerHTML = " ";
    document.getElementById("restablecer1").innerHTML = "";
    document.getElementById("restablecer2").innerHTML = "";
    document.getElementById("restablecer3").innerHTML = "";
}

document.getElementById('restablecer3').onclick = function () {
    document.getElementById("foto").innerHTML = '<img src="imagen_desarrollaorsenior.jpg">';
    document.getElementById("info").innerHTML = '<h2 id="Nombre"> Juan Perez<br><span>Desarrollador de software</span></h2>';
    document.getElementById("info_comp").innerHTML = " ";
    document.getElementById("restablecer1").innerHTML = "";
    document.getElementById("restablecer2").innerHTML = "";
    document.getElementById("restablecer3").innerHTML = "";
}






