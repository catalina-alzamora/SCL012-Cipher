
  //Parte de encode

    //obteniendo botón de encode y añadiendo función con evento click
    document.getElementById('btnEncode').addEventListener('click', () => {

   //asignando variable para guardar offset o clave (tipo number y número entero absoluto)
    let keyNumber= Math.floor(Math.abs(parseInt(document.getElementById('key').value)));

   //asignando variable para guardar texto inicial
    let textArea1= document.getElementById('initialText').value;
    
   //asignando variable para llamar texto final 
    let textArea2= document.getElementById('finalText');

   //mostrando resultado en textarea de texto final 
   textArea2.innerHTML= cipher.encode(keyNumber,textArea1);
    });

   //Parte de decode
  document.getElementById('btnDecode').addEventListener('click', () => {
  let keyNumber= parseInt(document.getElementById('key').value);
  
  let textArea1= document.getElementById('initialText').value;
 
  let textArea2= document.getElementById('finalText');
  textArea2.innerHTML= cipher.decode(keyNumber,textArea1);
  });

