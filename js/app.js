
var Pedido = {
    "NombrePlato": ko.observable("Prueba"),
    "Categoria": "",
    "NombreImagen": ko.observable(""),
    "Precio": ko.observable("0"),
    "Cantidad": ko.observable("0"),
    "PrecioNumerico": ko.observable(0),
    "ListaIncluye": ko.observable(["Nada"])
}

var Categorias = [];
Categorias.push('Todos');
[...new Set(Menu.map(function (element) { return element.Categoria }))].forEach(element => Categorias.push(element));

var ModalPedido = document.getElementById("ModalPedido");

ko.applyBindings(Pedido, document.getElementById("ModalPedido"));
ko.applyBindings(Menu, document.getElementById("DivListaMenu"));
ko.applyBindings(Categorias, document.getElementById("ListaCategorias"));
var contador = 0;

function cambiarFormato() {
    var elements = document.getElementsByClassName("platoMenu");

    for (let element of elements) {
        if (contador == 0) {
            element.className = "formatoLista platoMenu col-11 col-md-9 col-sm-9 m-3 text-center card";
            element.firstElementChild.className = "reverseRow";
        } else {
            element.className = "platoMenu col-5 col-md-3 col-sm-9 m-3 text-center card";
            element.firstElementChild.className = "";

        }
    }
    contador = contador == 0 ? 1 : 0;
}

var valorCategoria = '0';

function filtroTotal(vCategoria) {

    var cssMenu = '';
    valorCategoria = vCategoria;
    actualizarSeleccionMenuCategorias();

    if (valorCategoria == 'Todos') {
        OcultarMostrarTransicion('#DivListaMenu', '0');

        OcultarMostrarTransicion('#DivListaMenu', '1');

        OcultarMostrar('.platoMenu', 'none');

        OcultarMostrar('.platoMenu', 'block'); 
    }
    else {
        OcultarMostrarTransicion('#DivListaMenu', '0');

        OcultarMostrarTransicion('#DivListaMenu', '1');
        OcultarMostrarTransicion('.platoMenu', '0');
        OcultarMostrarTransicion('.platoMenu.' + valorCategoria, '1');
    }

}


function actualizarSeleccionMenuCategorias() {
    for (x = 0; x < Categorias.length; x++) {
        asignarClass(Categorias[x], "MenuLateral text-center");
    }
    asignarClass(valorCategoria, "MenuLateralSeleccionado text-center");
}
function OcultarMostrarTransicion(selector, tipoDisplay) {

    if (tipoDisplay == '0') {
        $(selector).fadeOut();

    } else {
        $(selector).fadeIn();
    }
}

function OcultarMostrar(selector, tipoDisplay) {

    if (tipoDisplay == 'none') {
        $(selector).hide();

    } else {
        $(selector).show();
    }
}


function asignarClass(id, value) {
    document.getElementById(id).className = value;
}

function abrirModalPedido(data) {
    Pedido.NombrePlato(data.NombrePlato);
    Pedido.Precio('S/. ' + data.Precio);
    Pedido.NombreImagen('Imagenes Reducidas/' + data.NombreImagen + '.jpeg');
    Pedido.Cantidad("1");
    Pedido.PrecioNumerico(parseFloat(data.Precio, 10));
    Pedido.ListaIncluye(data.ListaIncluye);
    cantidadPedido = 1;
    document.getElementById("subtotal").innerHTML = "";
    $("#ModalPedido").modal('show')
}
function cerrarModalPedido() {
    $("#ModalPedido").modal('hide')
}

var cantidadPedido = 1;

function actualizarContadorPedido(cambio) {
    cantidadPedido += cambio;

    cantidadPedido = cantidadPedido < 1 ? 1 : cantidadPedido;
    Pedido.Cantidad(cantidadPedido + '');
    document.getElementById("subtotal").innerHTML = "Subtotal: S/. " + (cantidadPedido * Pedido.PrecioNumerico());
}