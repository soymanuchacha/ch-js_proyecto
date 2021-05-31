// definición de variables
var URLJSON = "../data/menu.JSON";

obtenerDatosJson();

function obtenerDatosJson() {
    $.getJSON(URLJSON, function(respuesta, estado) {
        if (estado === "success") {
            let misProductos = respuesta;
            // cards
            loadCards(misProductos);
        }
    });
}

function loadCards(misProductos) {
    for(let i = 0; i < misProductos.length; i++) {
        const producto = misProductos[i];
        $("#menuCards").append(`<div class="eachCard">
                                <div class="cardsImg"><img src="../media/photos/${producto.id}.png" alt="${producto.name}"/></div>
                                <div class="cardsInfo">
                                    <h3 id="nombre${i}">${producto.name}</h3>
                                    <p>${producto.description}</p>
                                    <div class="cardsBuy">
                                        <div class="buyingPrice"><p id="precio${i}">$${producto.price}</p></div>
                                        <div class="buyingAction">
                                            <input value="1" type="number" id="QuantityProd${i}" name="cuantosProductos" min="1" max="${producto.stock}"/>
                                            <img id="agregarCarrito${i}" onclick="SumarCarrito(${i})" src="../media/icons/cart.svg" alt="Añadir al carrito"/>
                                        </div>
                                    </div>
                                </div>
                            </div>`)
    }
}


function SumarCarrito(i) {
    //armas el item en base a lo que tengas de i
    let itemSeleccionado = {
        nombre: $(`#nombre${i}`).text().trim(),
        cantidad: parseInt($(`#QuantityProd${i}`).val()),
        precio: parseInt($(`#precio${i}`).text().replace('$', '')) * parseInt($(`#QuantityProd${i}`).val())
        // aca tendrias que poner cantidad asumo y eso
    }
    console.log(itemSeleccionado);
}