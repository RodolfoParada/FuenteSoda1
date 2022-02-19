

/*Para ingresar al login se debe utilizar
Usuario y Contraseña */
function login(e){
    e.preventDefault();
  
   let Usuario = document.getElementById('usuario').value;
    let Contraseña =  document.getElementById('password').value;

  
    if(Usuario.value === null  || Usuario.value === ''){
      mensajesError.push('ingresa tu usuario');
   
    }
  
    if(Contraseña.value === null || Contraseña.value === ''){
      mensajesError.push('ingresa tu Contraseña');
    
    }
    else if(Contraseña === true && Usuario === true){
     window.location="Bienvenidos.html";    

    }
  console.log(Contraseña);
  console.log(Usuario);
  window.location="Bienvenido.html"; 

    return false;
  
  
  }
  