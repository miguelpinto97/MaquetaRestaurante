var PedidoFinal = JSON.parse(localStorage.getItem("PedidoFinal"));
console.log(PedidoFinal)
var TablaPedido = document.getElementById("TablaPedido");
ko.applyBindings(PedidoFinal, TablaPedido);

function EliminarPedido(){
    localStorage.setItem("PedidoFinal", "");
    window.location  ="version2.html";
}