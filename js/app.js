
//doc--> apunta al inicio del documento HTML <html>
var doc = $(document);
// ready--> cuando se ha cargado el HTML completo:
//- recursos del HEAD. css,fuentes,scripts js, fontawesome..
// SE EJECUTARA la funcion inicia
doc.ready(iniciar);

function iniciar() {
    console.log('Hola mundo, bienvenidos a JQUERY');
    var xqSomos = $("header nav a#quiesSomos");
    var xforma = $("header nav a#profesionales");
    var xtrab = $("header nav a#instalaciones");
    var xserv = $("header nav a#servicios")
    var xcont = $("header nav a#contacto")
    xqSomos.click(cargarQSomos);
    xforma.click(cargarforma);
    xtrab.click(cargartrab);
    xserv.click(cargarservicios);
    xcont.click(cargarcont);
    var xhome= $("header figure#logo");
    xhome.click(cargarhome);

    cargarhome();

}

function cargarhome(){
    $("main").load("html/home.html");
}
function cargarQSomos(){
    console.log('clickeado... en quienes somos ...');
    $("main").load("html/qsoy.html");
    $("head").children().last().remove();
    $("head").append ("<link rel='stylesheet' href='css/qsomos.css'>");

}
function cargarforma(){
    console.log('clickeado... en quienes somos ...');
    $("main").load("html/form.html");
    $("head").children().last().remove();
    $("head").append ("<link rel='stylesheet' href='css/formacion.css'>");
}
function cargartrab(){
    console.log('clickeado... en quienes somos ...');
    $("main").load("html/trab.html");
    $("head").children().last().remove();
    $("head").append ("<link rel='stylesheet' href='css/trabajos.css'>");
}
function cargarservicios(){
    console.log('clickeado... en quienes somos ...');
    $("main").load("html/serv.html");
    $("head").children().last().remove();
    $("head").append ("<link rel='stylesheet' href='css/serv.css'>");
}
function cargarcont(){
    console.log('clickeado... en quienes somos ...');
    $("main").load("html/cont.html");
    $("head").children().last().remove();
    $("head").append ("<link rel='stylesheet' href='css/contacto.css'>");
}