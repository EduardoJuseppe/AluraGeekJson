const containerBusqueda = document.querySelector(".containerBusqueda");
const btnLogin = document.getElementById('btnLogin');



const redireccionarLogin = () =>{
    window.location.href = "assets/templates/login.html";
}

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

containerBusqueda.addEventListener('mouseenter',ocultarBoton);
containerBusqueda.addEventListener('mouseout',aparecerBoton);
btnLogin.addEventListener('click',redireccionarLogin);
