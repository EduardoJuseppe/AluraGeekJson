export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    if (validadores[tipoDeInput]) {
      validadores[tipoDeInput](input);
    }
    if(input.validity.valid){
      input.parentElement.classList.remove("input-container--invalid");
      input.parentElement.querySelector(".input-message-error").innerHTML = "";
    }else{
      input.parentElement.classList.add('input-container--invalid');
      input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
  }
  
  const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
  ];
  
  const mensajesDeError = {
    nombre:{
      valueMissing: "El campo url no puede estar vacío",
      patternMismatch: "No tiene formato de url de imagen",
    },
    email: {
      valueMissing: "El campo correo no puede estar vacío",
      typeMismatch: "Correo no valido ej. ejemplo@alurageek.com",
    },
    password: {
      valueMissing: "El campo contraseña no puede estar vacío",
    },
    url: {
      valueMissing: "El campo url no puede estar vacío",
      patternMismatch: "No tiene formato de url de imagen",
    },
    categoria: {
        valueMissing: "El campo categoria no puede estar vacío",
        patternMismatch: "La categoria solo puede contener letras",
    },
    nombreProducto: {
        valueMissing: "El campo nombre producto no puede estar vacío",
        patternMismatch: "Solo ingresar letras o numeros",
    },
    precio: {
      valueMissing: "El campo precio producto no puede estar vacío",
      patternMismatch: "Formato Numero.XX ejemplo 60.00, 450.00",
    },
    mensaje: {
      valueMissing: "El mensaje no puede estar vacio",
      customError: "El maximo de caracteres es de 300",
    },
    descripcion: {
      valueMissing: "La descripcion no puede estar vacia",
      customError: "El maximo de caracteres es de 300",
    },
    
  };
  
function mostrarMensajeDeError(tipoDeInput, input) {
  let mensaje = "";
  tipoDeErrores.forEach((error) => {
    if (input.validity[error]) {
      // console.log(tipoDeInput, error);
      // console.log(input.validity[error]);
      // console.log(mensajesDeError[tipoDeInput][error]);
      mensaje = mensajesDeError[tipoDeInput][error];
    }
  });
  return mensaje;
}

const validarTextArea = (input) =>{
  let mensaje = '';
  // console.log(input.value.length);
  if(input.value.length >300){
    mensaje = "El maximo de caracteres es de 300";
  }
  input.setCustomValidity(mensaje);
};

const validadores = {
  descripcion: (input) => validarTextArea(input),
  mensaje: (input) => validarTextArea(input),
};


  
