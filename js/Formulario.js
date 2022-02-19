
function enviar(Event){
  Event.preventDefault();

  const nombre = document.getElementById('Nombre').value;
  const email =  document.getElementById('Correo').value;
  const mensaje =  document.getElementById('Mensaje').value;


  if(nombre.value === null  || nombre.value === ''){
    mensajesError.push('ingresa tu nombre');
 
  }

  if(email.value === null || email.value === ''){
    mensajesError.push('ingresa tu email');
  
  }

  
  if(mensaje.value === null || mensaje.value === ''){
    mensajesError.push('ingresa tu mensaje');
  
  }
console.log(nombre);
console.log(email);
console.log(mensaje);

  /*if(check.value === null || check.value === ''){
    mensajesError.push('acepta los terminos y condiciones');
  
  }

  error.innerHTML = mensajesError.join(', ');
*/
  return false;

}


