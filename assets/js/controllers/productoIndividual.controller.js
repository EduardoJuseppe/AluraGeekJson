import { clientServices } from "../service/cliente-service.js";
const productoFiltrado = [];

const crearCard = (url,nombreProducto,precio,id) =>{
  const card = document.createElement('div');
  card.classList.add('card');
  const divImg = document.createElement('div');
  divImg.classList.add('divImg');
  card.appendChild(divImg);
  const imgCard = document.createElement('img');
  imgCard.classList.add('imgCard');
  imgCard.setAttribute('src',`${url}`);
  divImg.appendChild(imgCard);
  const divContenido = document.createElement('div');
  divContenido.classList.add('divContenido');
  card.appendChild(divContenido);
  const tituloContenido = document.createElement('h3');
  tituloContenido.textContent = nombreProducto;
  divContenido.appendChild(tituloContenido);
  const valor = document.createElement('label');
  valor.textContent = `$ ${precio}`;
  divContenido.appendChild(valor);
  const verProducto = document.createElement('button');
  verProducto.textContent = "Ver producto";
  verProducto.classList.add('labelVerProducto');
  divContenido.appendChild(verProducto);
  verProducto.addEventListener('click',()=>{
      window.location.href = `./producto__individual.html?id=${id}`;
  });
  // const modificar = document.createElement('a');
  // modificar.setAttribute('href',`assets/templates/producto__individual.html?id=${id}`);
  // modificar.appendChild(verProducto);
  // divContenido.appendChild(modificar);
  return card;

};

const randomProductosSimilares = (productoFiltrado) =>{
  productoFiltrado.sort(()=> Math.random() - 0.5);
  let numeroCards = 0;    
  if(window.screen.width < 768)
      numeroCards = 4;
  else if(window.screen.width < 1440 && window.screen.width >= 768)
      numeroCards = 4;
  else if(window.screen.width >= 1440)
      numeroCards = 6;
  // console.log(numeroCards);

  const main = document.querySelector('.main');
  const containerProductos = document.createElement('div')
  containerProductos.setAttribute('id','containerProductos');
  main.appendChild(containerProductos);
  const labelProductos = document.createElement('label')
  labelProductos.setAttribute('id','labelProductos');
  labelProductos.textContent = "Productos Similares";
  containerProductos.appendChild(labelProductos);
  const divCards = document.createElement('div');
  divCards.classList.add('divCards');
  containerProductos.appendChild(divCards);

  for(let x=0;x<numeroCards;x++){
    // console.log(productoFiltrado[x].ruta+"\n"+productoFiltrado[x].nombre+"\n"+productoFiltrado[x].valor+"\n"+productoFiltrado[x].identificador+"\n\n\n\n\n");
    const card = crearCard(productoFiltrado[x].ruta,productoFiltrado[x].nombre,productoFiltrado[x].valor,productoFiltrado[x].identificador);
    divCards.appendChild(card);
  }
  
   
  
}

const productoSimilares = (categoriaFiltrada,idEncontrada) =>{
    // console.log("categoria a filtrar "+categoria);
    clientServices.ListaProductos().then((data) => { 
    data.forEach(({ url,categoria,nombreProducto,precio,id }) => {
        if(categoria === categoriaFiltrada && id != idEncontrada){
          productoFiltrado.push({ruta: url,nombre: nombreProducto,valor: precio,identificador:id});
        }
      });
      randomProductosSimilares(productoFiltrado);
    })
    .catch((error) => alert("Ocurrió un error"));
    
};

const obtenerInformacion = async () => {
    const urlId = new URL(window.location);
    const id = urlId.searchParams.get("id");
  
    if (id === null) {
      window.location.href = "/screens/error.html";
    }
  
    let url;
    let categoria;
    let nombreProducto;
    let precio;
    let descripcion;
  
    try {
      const productos = await clientServices.detalleCliente(id);
      if (productos.url && productos.categoria && productos.nombreProducto && productos.precio && productos.descripcion && productos.id) {
        let sku = productos.id;
        url = productos.url;
        categoria = productos.categoria;
        nombreProducto = productos.nombreProducto;
        precio = productos.precio;
        descripcion = productos.descripcion;
        const divProductoIndividual = document.getElementById('divProductoIndividual');

        const imgProductoIndividual = document.createElement('img');
        const divImgProductoIndividual = document.createElement('div');
        divImgProductoIndividual.setAttribute('id','divImgProductoIndividual');
        imgProductoIndividual.setAttribute('src',`${url}`);
        imgProductoIndividual.classList.add('imgProductoIndividual');

        divProductoIndividual.appendChild(divImgProductoIndividual);
        divImgProductoIndividual.appendChild(imgProductoIndividual);

        const divContenidoProductoIndividual = document.createElement('div');
        divContenidoProductoIndividual.setAttribute('id','divContenidoProductoIndividual');
        divProductoIndividual.appendChild(divContenidoProductoIndividual);

        const tituloProductoIndividual = document.createElement('label');
        tituloProductoIndividual.textContent = nombreProducto;
        tituloProductoIndividual.setAttribute('id','labelTituloProducto');
        divContenidoProductoIndividual.appendChild(tituloProductoIndividual);

        const precioProductoIndividual = document.createElement('label');
        precioProductoIndividual.textContent = `$ ${precio}`;
        precioProductoIndividual.classList.add('precioProductoIndividual');
        divContenidoProductoIndividual.appendChild(precioProductoIndividual);

        const descripcionProductoIndividual = document.createElement('label');
        descripcionProductoIndividual.textContent = descripcion;
        descripcionProductoIndividual.classList.add('descripcionProductoIndividual');
        divContenidoProductoIndividual.appendChild(descripcionProductoIndividual);
        productoSimilares(categoria,sku);
      } else {
        throw new Error();
      }
    } catch (error) {
    //   window.location.href = "/screens/error.html";
    console.log('ocurrio algo malardo');
    
    }
  };
  
  obtenerInformacion();