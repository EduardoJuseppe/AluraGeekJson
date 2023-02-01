const containerBusqueda = document.querySelector(".containerBusqueda");
const btnLogin = document.getElementById('btnLogin');

const ocultarBoton = (e) =>{
    if(screen.width <=460){
        console.log('borrar');
        const btnLogin = document.getElementById('btnLogin');
        btnLogin.style.display = "none";
    }
};

const aparecerBoton = (e) =>{
    if(screen.width <=460){
        setTimeout(() => {
            console.log('aparecer');
            const btnLogin = document.getElementById('btnLogin');
            btnLogin.style.display = "block";
          }, "700")    
    }
};

const calcularAlturas = () =>{
    const style = document.documentElement.style

    let header = document.getElementById('header');
    let footer = document.getElementById('footer');

    let alturaHeader = header.clientHeight;
    let alturaFooter = footer.clientHeight;
    let alturaHeaderFooter = alturaHeader + alturaFooter;

    document.documentElement.style.setProperty('--alturaHeaderFooter', alturaHeaderFooter + "px");
}

calcularAlturas();
containerBusqueda.addEventListener('mouseenter',ocultarBoton);
containerBusqueda.addEventListener('mouseout',aparecerBoton);
