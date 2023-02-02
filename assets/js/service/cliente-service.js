
const ListaClientes = () => fetch("http://localhost:3000/admin/")
.then((data) => data.json());


export const clientServices ={
    ListaClientes,
    
};