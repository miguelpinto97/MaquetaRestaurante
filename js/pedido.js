var PedidoFinal = JSON.parse(localStorage.getItem("PedidoFinal"));
console.log(PedidoFinal)
var TablaPedido = document.getElementById("TablaPedido");
PedidoFinal = ko.observableArray(PedidoFinal);
ko.applyBindings(PedidoFinal, TablaPedido);

function EliminarPedidoCompleto() {
    localStorage.setItem("PedidoFinal", "");
    window.location = "index.html";
}

function EliminarPedido(value) {
    var index = value();
    try {
        PedidoFinal.splice(index, 1);

    } catch {

    }
    console.log(PedidoFinal())

    var cadenaStorage = PedidoFinal().length == 0 ? '' : JSON.stringify(PedidoFinal());
    localStorage.setItem("PedidoFinal", cadenaStorage);

}