// imports


// initialice
$(document).ready( function() {

    // definición de variables
    const URLJSON = "../data/menu.JSON";
    const MiMenu = [];

    



    
    // traigo los productos del JSON
    $.getJSON(URLJSON, function(respuesta, estado) {
        if(estado === "success") {
            let misProductos = respuesta;
            for(const producto of misProductos) {
                MiMenu.push(producto);
                // cards
                $("#menuCards").append(`
                    <div class="eachCard">
                        <div class="cardsImg"><img src="../media/photos/${producto.id}.png" alt="${producto.name}"/></div>
                        <div class="cardsInfo">
                            <h3>${producto.name}</h3>
                            <p>${producto.description}</p>
                            <div class="cardsBuy">
                                <div class="buyingPrice"><p>$${producto.price}</p></div>
                                <div class="buyingAction">
                                    <input value="1" type="number" id="cantidadPara${producto.id}" name="cuantosProductos" min="1" max="${producto.stock}"/>
                                    <img id="agregarAlCarrito" src="../media/icons/cart.svg" alt="Añadir al carrito"/>
                                </div>
                            </div>
                        </div>
                    </div>`);
            }   
        }
    });
    






















// último cierre
});