
const calcularNav = () =>{
    const style = document.documentElement.style

    let container = document.getElementById('containerBusqueda');

    let largoContainer = container.clientWidth;
    largoContainer = largoContainer/1.95;

    // console.log(largoContainer);

    document.documentElement.style.setProperty('--largoNav', largoContainer + "px");
}

calcularNav();
