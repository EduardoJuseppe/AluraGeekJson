
const ListaClientes = () => fetch("http://localhost:3000/admin/").then((respuesta) => respuesta.json());


export const clientServices ={
    ListaClientes,
    
};