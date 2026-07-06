# Actividad3PrograWeb
La actividad 3 consiste en la creacion de componentes reutilizables que cumplan una funcion visual al estilo de los componentes nativos de los frameworks
# componente.js y componente.css
Instituto Tecnologico de Oaxaca
Chavez Hernandez Luis Eduardo
Actividad 3 componente.js
Profesora Martinez Nieto Adelina
Componente.js es una libreria que cumple la funcion de libreria de componente visual con la capacidad de adaptarse a la informacion que se le sea necesario enviar con el solo llamar a las funciones, trabaja en conjunto con el archivo componente.css, generando asi componentes que permiten al usuario recibir informacion de una fomra visual mas comoda e interactiva

Dentro de componente.js se tienen componentes que permiten proveer al usuario informacion, optimizar su espacio en pantalla con componentes dinamicos de informacion asi como tambien ver de una forma mas visual datos como lo es una barra animada de progreso.

Cada uno de los 6 componentes incluidos dentro de esta libreria tiene un funcionamiento propio
Componentes
Todos los componentes cumplen la funcion de proporcionar al usuario informacion de una forma unica aprovechando la potencia visual de componentes generados con ayuda de javascript

Componente 1 Este componente es un aviso al estilo notificacion que se despliega en la esquina de la pantalla, proporciona informacion durante un tiempo modificable y es posible quitar por el usuario rapidamente el mensaje, tambien el componente incluye 4 colores con gravedades diferentes correcto, incorrecto, informativo, y aviso.

Componente 2 El componente 2 es un componente al estilo alert de java pero trata de mejorar un disenio que permita al usuario centrar un enfoque solo en ese mensaje estilo ventana emergente gracias a que oscurece todo el fondo de la pantalla de igual manera puede quitarse.

Componente 3 El componente 3 se basa en informacion con despliegue tipo acordeon, se envia donde estara y la informacion a desplegar, tanto titulo como texto, nos ayuda a optimizar el espacio en pantalla del usuario por su estilo pop al hacer click sobre.

Componente 4 El componente 4 es informacion que se visualiza al estilo hoover cuando el usuario lo sostiene por encima, es una propiedad agregable y permite igual manera optimizar el espacio en pantalla teniendo informacion que no necesariamente siempre ocupe espacio. 
Componente 5 El componente 5 es un diseno pre definido de anuncios de informacion con imagen, texto y titulo generables apartir de una llamada a la funcion del componetne, ayuda a generar este tipo de elementos deuna manera mas rapida y eficiente.
Componente 6 Consta de una barra dinamica animada que reacciona dependiendo del valor que sea asignado a esta misma, ayuda al usuario a conocer un dato de una manera mas dinamica, pudiendo ver el movimiento que realiza esta misma.


Instalacion
Para instalar esta libreria en una apliacacion web es necesario solamente
Descargar los archivos componente.css y componente.js que trabajan de la mano e introducirlos dentro del entorno de trabajo, para posteriormente deontro de un archivo .html ser llamados con las etiquetas
  <link rel="stylesheet" href="css/componente.css" />
    <script src="js/componente.js"></script>
Cada uno de los componentes tiene una forma correcta de ser implementados:

USO
1. `componente 1` ALERTA notificacion
 Como se usa
```javascript
mostrarAviso("Se guardo correctamente", "exito");
   mostrarAviso("Hubo un error", "error", 5000);
```

<img width="1062" height="309" alt="image" src="https://github.com/user-attachments/assets/77aa7535-0764-4d21-bac0-f65bc687230b" />


 2. `componente 2` Alerta ventana
 Como se usa

```javascript
Como se usa
   abrirVentana("Confirmar", "Seguro que quieres continuar?");
```
<img width="1000" height="381" alt="image" src="https://github.com/user-attachments/assets/75f274ab-5fd6-4c01-9682-e081fdba0364" />

3. `componente 3` INFORMACION desplegable
 Como se usa

```javascript
   crearAcordeon("mi-acordeon", [
     { titulo: "Pregunta 1", contenido: "Respuesta 1" },
     { titulo: "Pregunta 2", contenido: "Respuesta 2" }
   ]);
```
<img width="884" height="472" alt="image" src="https://github.com/user-attachments/assets/51af732a-801c-4f43-8310-7f13a23a4c83" />


 4. `componente 4` Tips de componente
 Como se usa

```javascript
en el HTML:
   <button data-mensaje="Guarda los cambios">Guardar</button>
              ^
              |
              |
   Y en el JavaScript, se llama UNA sola vez:
   activarTooltips(); para activar todos
```
<img width="921" height="227" alt="image" src="https://github.com/user-attachments/assets/9479d48d-dd44-4373-9622-b8c422faa3b5" />

5. `componente 5` Plantilla de componente 
 Como se usa
```javascript
   crearTarjetas("mis-tarjetas", [
     { icono: "img/rapido.png", titulo: "Rapido", descripcion: "Se instala en segundos" },
     { icono: "img/seguro.png", titulo: "Seguro", descripcion: "Sin librerias externas" }
   ]); 
```
<img width="998" height="545" alt="image" src="https://github.com/user-attachments/assets/9813a659-5108-43b4-af4f-a560001300a6" />

6. `componente 6` Barra de progreso
 Como se usa

```javascript
crearBarraProgreso("mi-barra", 67, "Progreso del curso 67%");
```
<img width="938" height="193" alt="image" src="https://github.com/user-attachments/assets/697dcd38-3357-45be-8f42-21dfa21232b1" />
