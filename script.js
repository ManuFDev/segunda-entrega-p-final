let newProducto = document.getElementById("input_producto");
let btn_agregar = document.getElementById("btn_agregar");
let lista = document.getElementById("lista");
let btn_remove = document.getElementById("btn_remove");

function agregar_nuevo_producto(item) {

    if (item) {
        addProducto(item);
        let indice = localStorage.length;
        localStorage.setItem(indice.toString(), item.toString());
    } else {
        alert("Agregue un producto");
    }
}

function addProducto(item) {

    let li = document.createElement("li");
    li.textContent = item;
    lista.appendChild(li);
}


btn_agregar.addEventListener("click", () => {

    let dato = newProducto.value;
    agregar_nuevo_producto(dato);
    newProducto.value = "";

    btn_remove.addEventListener("click", () => {
        localStorage.clear();
        lista.innerHTML = "";

    })
})

newProducto.addEventListener("keypress", (event) => {
    if (event.keyCode === 13) {
        let dato = newProducto.value;
        agregar_nuevo_producto(dato);
        newProducto.value = "";
    }
})