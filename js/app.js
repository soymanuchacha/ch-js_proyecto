// definición de variables
const URLJSON = "../data/menu.JSON";
const MiCarrito = [];
let itemAgregado;
let registroCarrito = [];
const guardarLocal = (clave, valor) => {localStorage.setItem(clave, valor)};

//initialice
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
    // info producto
    itemAgregado = {
        nombre: $(`#nombre${i}`).text().trim(),
        cantidad: parseInt($(`#QuantityProd${i}`).val()),
        precio: parseInt($(`#precio${i}`).text().replace('$', '')) * parseInt($(`#QuantityProd${i}`).val())
    }
    
    $("#dropdownCart").prepend(`<li>
                                <h4>${itemAgregado.nombre}</h4>
                                <div class="flexP">
                                <p class="pDropdown">${itemAgregado.cantidad} x <b>$${itemAgregado.precio}</b></p>
                                <img src="../media/icons/bin.svg" alt="Eliminar items"/></div>
                                </li>`)
    MiCarrito.push(itemAgregado);
    guardarLocal("listaCarrito", JSON.stringify(MiCarrito));
}

// funcionamiento carrito
$("#iconCart").on("click", () => {
    $("#dropdownCart").toggle();
})
$(".btnPrimary").on("click", () => {
    $("#visualiceMenu").toggle();
})



