// definición de variables
const URLJSON = "../data/menu.JSON";
const MiCarrito = [];
let itemAgregado;
const guardarLocal = (clave, valor) => {localStorage.setItem(clave, valor)};
let respaldoCarrito = [];

let productosExperiencias = [];
let productosPostres = [];

//initialice
obtenerDatosJson();

// cards
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
                                            <img id="agregarCarrito${i}" onclick="SumarCarrito(${i})" src="../media/icons/cart.svg" alt="Añadir al carrito" style="cursor: pointer;"/>
                                        </div>
                                    </div>
                                </div>
                            </div>`)
    productosExperiencias = misProductos.filter(producto => producto.category === "Experiencias");
    productosPostres = misProductos.filter(producto => producto.category === "Postres");
    }
}
function SumarCarrito(i) {
    // info producto
    itemAgregado = {
        nombre: $(`#nombre${i}`).text().trim(),
        cantidad: parseInt($(`#QuantityProd${i}`).val()),
        precio: parseInt($(`#precio${i}`).text().replace('$', '')) * parseInt($(`#QuantityProd${i}`).val())
    }

    // lo llevo al carrito
    $("#dropdownCart").prepend(`<li id="item${itemAgregado.id}">
                                <h4>${itemAgregado.nombre}</h4>
                                <div class="flexP">
                                <p class="pDropdown">${itemAgregado.cantidad} x <b>$${itemAgregado.precio}</b></p>
                                </div>
                                </li>`);
                                // <img onclick="eliminarItemCarrito()" class="dropdownBin" src="../media/icons/bin.svg" alt="Eliminar items" style="cursor: pointer;"/>
    MiCarrito.push(itemAgregado);
    guardarLocal("listaCarrito", JSON.stringify(MiCarrito));
}

// visualización menú y carrito
$("#iconCart").on("click", () => {
    $("#dropdownCart").toggle();
})
$(".btnPrimary").on("click", () => {
    $("#visualiceMenu").slideToggle("slow");
})

// filtrar por categoría
$("#cardsExperiencias").on("click", () => {
    $("#menuCards").empty();
    for(let i = 0; i < productosExperiencias.length; i++) {
        const producto = productosExperiencias[i];
        $("#menuCards").prepend(`<div class="eachCard">
                                <div class="cardsImg"><img src="../media/photos/${producto.id}.png" alt="${producto.name}"/></div>
                                <div class="cardsInfo">
                                    <h3 id="nombre${i}">${producto.name}</h3>
                                    <p>${producto.description}</p>
                                    <div class="cardsBuy">
                                        <div class="buyingPrice"><p id="precio${i}">$${producto.price}</p></div>
                                        <div class="buyingAction">
                                            <input value="1" type="number" id="QuantityProd${i}" name="cuantosProductos" min="1" max="${producto.stock}"/>
                                            <img id="agregarCarrito${i}" onclick="SumarCarrito(${i})" src="../media/icons/cart.svg" alt="Añadir al carrito" style="cursor: pointer;"/>
                                        </div>
                                    </div>
                                </div>
                            </div>`)
    }
})

$("#cardsPostres").on("click", () => {
    $("#menuCards").empty();
    for(let i = 0; i < productosPostres.length ; i++) {
        const producto = productosPostres[i];
        $("#menuCards").prepend(`<div class="eachCard">
                                <div class="cardsImg"><img src="../media/photos/${producto.id}.png" alt="${producto.name}"/></div>
                                <div class="cardsInfo">
                                    <h3 id="nombre${i}">${producto.name}</h3>
                                    <p>${producto.description}</p>
                                    <div class="cardsBuy">
                                        <div class="buyingPrice"><p id="precio${i}">$${producto.price}</p></div>
                                        <div class="buyingAction">
                                            <input value="1" type="number" id="QuantityProd${i}" name="cuantosProductos" min="1" max="${producto.stock}"/>
                                            <img id="agregarCarrito${i}" onclick="SumarCarrito(${i})" src="../media/icons/cart.svg" alt="Añadir al carrito" style="cursor: pointer;"/>
                                        </div>
                                    </div>
                                </div>
                            </div>`)
    }
})
$("#cardsTodas").on("click", () => {
    $("#menuCards").empty();
    for(let i = 0; i < productosPostres.length; i++) {
        const producto = productosPostres[i];
        $("#menuCards").prepend(`<div class="eachCard">
                                <div class="cardsImg"><img src="../media/photos/${producto.id}.png" alt="${producto.name}"/></div>
                                <div class="cardsInfo">
                                    <h3 id="nombre${i}">${producto.name}</h3>
                                    <p>${producto.description}</p>
                                    <div class="cardsBuy">
                                        <div class="buyingPrice"><p id="precio${i}">$${producto.price}</p></div>
                                        <div class="buyingAction">
                                            <input value="1" type="number" id="QuantityProd${i}" name="cuantosProductos" min="1" max="${producto.stock}"/>
                                            <img id="agregarCarrito${i}" onclick="SumarCarrito(${i})" src="../media/icons/cart.svg" alt="Añadir al carrito" style="cursor: pointer;"/>
                                        </div>
                                    </div>
                                </div>
                            </div>`)
    }
    for(let i = 0; i < productosExperiencias.length; i++) {
        const producto = productosExperiencias[i];
        $("#menuCards").prepend(`<div class="eachCard">
                                <div class="cardsImg"><img src="../media/photos/${producto.id}.png" alt="${producto.name}"/></div>
                                <div class="cardsInfo">
                                    <h3 id="nombre${i}">${producto.name}</h3>
                                    <p>${producto.description}</p>
                                    <div class="cardsBuy">
                                        <div class="buyingPrice"><p id="precio${i}">$${producto.price}</p></div>
                                        <div class="buyingAction">
                                            <input value="1" type="number" id="QuantityProd${i}" name="cuantosProductos" min="1" max="${producto.stock}"/>
                                            <img id="agregarCarrito${i}" onclick="SumarCarrito(${i})" src="../media/icons/cart.svg" alt="Añadir al carrito" style="cursor: pointer;"/>
                                        </div>
                                    </div>
                                </div>
                            </div>`)
    }
})

// shopping page
$("#cartPage").on("click", () => {
    $("#hidingStuff").slideUp("3000", () => {
        $("#shopCarrito").slideDown("7000");
    });

    // traigo el carrito
    const respaldoCarrito = JSON.parse(localStorage.getItem("listaCarrito"));
    console.log(respaldoCarrito);
    let precioFinal = 0;
    for(let i = 0; i < respaldoCarrito.length; i++) {
        const producto = respaldoCarrito[i];
        precioFinal += producto.precio;
        $("#listaCompras").append(`<div class="respaldoDiv" id="item${producto.nombre}">
        <h3 id="respaldoName">${producto.nombre}</h3>
        <p>Cantidad: ${producto.cantidad}</p>
        <p>Precio: ${producto.precio}</p>
        <img src="../media/icons/bin.svg" alt="Eliminar item"/>
        </div>`);
    }
    console.log(precioFinal);
    $("#listaCompras").append(`<div class="respaldoDiv">
    <p class="pTotal">Total a pagar: $${precioFinal}</p>
    </div>`); 
})
$("#confirmarCompra").on("click", () => {
    $("#hideCart").slideUp("fast", () => {
        $("#formInformation").slideDown("fast", () => {
            $("#contactForm").slideDown("fast", () => {
                $("#formInformation").append(`<p class="pInformation">
                ¡Completá el formulario y nos comunicaremos a la brevedad!</p>`);
            });
        });
    });
});

// formulario compra
$("#contactForm").submit(function(e) {
    e.preventDefault();
    let hijos = $(e.target).children();
    if(hijos != "") {
        // alert("Gracias por enviar el form");
        $("#formInformation").slideUp("fast", () => {
            $("#contactForm").slideUp("fast", () => {
                $("#gracias").append(`<p>¡Muchas gracias por comprar en <b>Casa Virazon</b>!</p>`)
            });
        });
    }
});





