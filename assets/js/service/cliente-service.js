
const ListaClientes = () => fetch("http://localhost:3000/admin/")
.then((data) => data.json());

const ListaProductos = () => fetch("http://localhost:3000/productos/")
.then((data) => data.json());

const crearCliente = (url,categoria,nombreProducto,precio,descripcion) => {
    return fetch("http://localhost:3000/productos/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({url,categoria,nombreProducto,precio,descripcion, id: uuid.v4() }),
    });
};

const eliminarCliente = (id) => {
    return fetch(`http://localhost:3000/productos/${id}`, {
      method: "DELETE",
    });
};

const detalleCliente = (id) => {
  return fetch(`http://localhost:3000/productos/${id}`).then((respuesta) =>
    respuesta.json()
  );
};

const actualizarCliente = (url,categoria,nombreProducto,precio,descripcion,id) => {
  return fetch(`http://localhost:3000/productos/${id}`,{
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({url,categoria,nombreProducto,precio,descripcion}),
  })
  .then(respueta => respueta)
  .catch((err) => console.log(err));
}

export const clientServices ={
    ListaClientes,
    ListaProductos,
    crearCliente,
    eliminarCliente,
    detalleCliente,
    actualizarCliente,
};