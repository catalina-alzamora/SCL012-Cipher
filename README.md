
# Definición del producto
"Comunica seguro" es una aplicación para transformar el contenido de mensajes de una forma que solo el usuario y su interlocutor puedan entenderlo. Está dirigido a abogados y clientes, pero es apta para todo tipo de usuario.
La idea de “Comunica seguro” surgió tras recordar que en Chile hubo casos de procesos legales en que, para bien o para mal, se filtraban correos electrónicos o conversaciones por redes sociales que contenían información relevante que trajo problemas a las personas involucradas. Es por esto que surge la necesidad de aumentar el nivel de seguridad a la hora de comunicarnos de forma remota con otras personas, sobre todo si se trata de los temas que se hablan con abogados.

## Usuarios
Los principales usuarios de este producto son todas las personas que se comunican con sus abogados de forma remota, ya sea correo electrónico o redes sociales. Usarán la aplicación para transformar (o cifrar) los mensajes que quieran enviar, de acuerdo a una clave numérica personalizada. De esta forma se aumenta la confidencialidad de dichos correos o mensajes de texto. De la misma forma podrán leer (o descifrar) mensajes que hayan recibido, y sólo podrán lograrlo si conocen la clave.

### Objetivo
Esta aplicación busca entregar mayor seguridad a la comunicación entre dos usuarios, ofreciéndoles una alternativa rápida de cifrar y descifrar sus mensajes. El usuario es anónimo ya que no se pide registro de ingreso ni ningún dato personal que pueda afectarlo.

#### Diseño
Pensando en que los clientes de abogados son un grupo amplio de personas, el diseño de la aplicación fue pensado justamente para todo público. Por lo tanto, se optó por una estructura simple y rápida de entender, centrada en la división de los 3 pasos que el usuario deberá realizar al hacer uso de ella. Esta idea fue cambiando a medida que se realizó testeo de usabilidad.
Inicialmente la aplicación mostraba los pasos a seguir de a uno en la pantalla, no incluía botones y las instrucciones se encontraban ocultas en un ícono. Sin embargo, los testeos de usabilidad revelaron que la falta de botones hacía que la aplicación fuera menos intuitiva, y por otro lado las instrucciones no fueron visitadas por los usuarios. Finalmente se decidió dividir las instrucciones y dejarlas como encabezados en cada paso, por lo que ya no era necesario mostrar en la pantalla un paso a la vez, lo que además no permitiría observar los datos ingresados previamente cuando se llega al paso final. 
Además se agregó un botón de reinicio para limpiar los datos y asegurar un buen funcionamiento de la página en caso de volver a usarse el cifrado o descifrado.
Finalmente se hicieron cambios en los tamaños de cada elemento ya que la última parte de la aplicación no se podía ver facilmente y enlenteció el uso de la aplicación.

A continuación se encuentran las imágenes de los prototipos de baja y alta fidelidad, y la aplicación final.

![Imagen de prototipo de baja fidelidad]
(https://raw.githubusercontent.com/catalina-alzamora/SCL012-Cipher/master/images/prototipoBajaFidelidad.png).

![Imagen de prototipo de alta fidelidad]
(https://raw.githubusercontent.com/catalina-alzamora/SCL012-Cipher/master/images/prototipoAltaFidelidad.png).

![Imagen de aplicación final]
(https://raw.githubusercontent.com/catalina-alzamora/SCL012-Cipher/master/images/aplicacionFinal.png).


##### Requisitos
Esta aplicación web se estructuró utilizando Visual Studio Code, con html, javascript y CSS. Se revisó principalmente en el navegador google Chrome.
Los tests se realizaron en el terminal.

![Imagen de resultados de test]
(https://raw.githubusercontent.com/catalina-alzamora/SCL012-Cipher/master/images/test.png).

###### Modo de uso
Antes de utilizar esta aplicación es necesario que el usuario acuerde la clave numérica secreta que tendrá con su interlocutor para que este último pueda descifrar el mensaje una vez lo reciba. 

Ingresar a la aplicación por medio de un explorador web, idealmente Google Chrome. Se abrirá una página en la que se pueden encontrar tres cuadros o cajas ordenadas de arriba hacia abajo, que corresponde a su orden de uso. En la primera caja se escribe la clave numérica, luego en la siguiente caja se escribe el mensaje de texto que se desea enviar o leer. Bajo este texto se encuentran los botones de cifrar y descifrar, donde el usuario deberá hacer click en uno de ellos dependiendo si quiere enviar un mensaje cifrado (cifrar), o leer un mensaje recibido (descifrar). Finalmente está la última caja donde se visualizará el texto resultante, y que puede copiarse en el caso de quererse posteriormente enviar. Abajo se encuentra un botón de reiniciar, para cargar de nuevo la aplicación.






