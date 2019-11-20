
window.cipher = {
  encode: (offset, text) => {

    //cuando no se ingresan las variables
    if(offset==="" || text===""){
      return(alert("Recuerda escribir la CLAVE y tu MENSAJE. Presiona el botón REINICIAR para continuar."));
    }
    //offset 0 es inválido
    if(offset===0){
      return(alert("Tu clave debe ser distinta de cero"))
    }
    //declarando variable para mostrar texto cifrado
    let newText= "";

    //recorrer texto para aplicar fórmula
    for (let i = 0; i <= text.length; i++) {

      //mayúsculas
      if (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90) {
        newText += String.fromCharCode((text.charCodeAt(i) - 65 + offset) % 26 + 65);

      //minusculas
      } else if (text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122) {
        newText += String.fromCharCode((text.charCodeAt(i) - 97 + offset) % 26 + 97);
      
      //todo lo demás
      } else { 
        newText += text.charAt(i);
         
      } 
    }  
  //imprimir texto codificado al final
  return newText;
  },

  decode: (offset, text) => {
    let newText= "";
    for (let i = 0; i <= text.length; i++) {

      if(offset==="" || text===""){
        return(alert("Recuerda primero escribir la clave y tu mensaje. Presiona el botón Reiniciar para continuar."));
      }
      if(offset===0){
        return(alert("Tu clave debe ser distinta de cero"))
      }
      //mayúsculas
      if (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90) {
        newText += String.fromCharCode((text.charCodeAt(i) - 90 - offset) % 26 + 90);
      //minusculas
      } else if (text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122) {
        newText += String.fromCharCode((text.charCodeAt(i) - 122 - offset) % 26 + 122);
      //todo lo demás
      } else {
        newText += text.charAt(i);
      } 
    }
    //imprimir texto decodificado al final
    return newText;
  }
} 

/*
fórmula: para cipher sería= [pasar a letra((letras en ascii) - 65 + offset) % 26 + 65)]
Para descifrar se usa la misma fórmula pero en cambio se resta el offset 
y se usa la posición final del grupo de caracteres usados
-variable.charCodeAt(i)=sirve para obtener el ascii de cada letra
-String.fromcharCode(i)=sirve para obtener la letra desde un número ascii
-charAt(i)=sirve para que aparezca la letra de una determinada posición
*/
