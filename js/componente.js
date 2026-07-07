/*
   FUNCIONES DE JAVASCRIPT QUE SE USAN EN ESTE ARCHIVO
   - document.getElementById(id)        -> busca un elemento por su id
   - document.querySelectorAll(selector)-> busca varios elementos que cumplen una regla
   - document.createElement(etiqueta)   -> crea un elemento nuevo (ej: un div)
   - elemento.setAttribute(nombre, valor)-> le pone un atributo al elemento (ej: class)
   - elemento.getAttribute(nombre)      -> lee un atributo del elemento
   - elemento.appendChild(hijo)         -> mete un elemento dentro de otro
   - elemento.removeChild(hijo)         -> saca un elemento de adentro de otro
   - elemento.querySelector(selector)   -> busca UN elemento hijo que cumpla una regla
   - elemento.innerHTML                 -> escribe HTML dentro de un elemento
   - elemento.addEventListener(evento, funcion) ->  recibe cuando pasa algo (clic, mouse, etc)
   - elemento.style.propiedad           -> cambia un estilo CSS desde JavaScript
   - setTimeout(funcion, milisegundos)  -> ejecuta algo despues de un tiempo
  */


/*
   COMPONENTE 1: AVISO (tipo notificacion)
    Como se usa
   mostrarAviso("Se guardo correctamente", "exito");
   mostrarAviso("Hubo un error", "error", 5000);
    */

function mostrarAviso(mensaje, tipo, duracion) {

  // si no se especifica tipo, el default es info
  if (tipo === undefined) {
    tipo = "info";
  }

  // la duracion default es 3 segs si no se especifica
     if (duracion === undefined) {
    duracion = 3000;
  }

  // se busca si existe una caja de avisos
  var contenedor = document.getElementById("caja-avisos");

  // si no es asi se crea un contenedor en si completo
  if (contenedor === null) {
    contenedor = document.createElement("div");
    contenedor.setAttribute("id", "caja-avisos");
    document.body.appendChild(contenedor);
  }

  // elegimos icono segun el tipo de aviso
  var icono = "";
  if (tipo === "exito") {
    icono = ":D";
  } else if (tipo === "error") {
    icono = ":(";
  } else if (tipo === "advertencia") {
    icono = ":O";
  } else {
    icono = ":o?";
  }

  var aviso = document.createElement("div");
  aviso.setAttribute("class", "aviso aviso-" +tipo);//temrinamos de definir como va ser

  aviso.innerHTML = "<span class='aviso-icono'>" + icono + "</span>" +
    "<span class='aviso-texto'>" + mensaje + "</span>" +
    "<button class='aviso-cerrar'>x</button>"; // formamos el componente

  // mostramos la caja de aviso a la pantalla
  contenedor.appendChild(aviso);

  // se agrega el boton para poder cerrar por el usuario
  var botonCerrar = aviso.querySelector(".aviso-cerrar");

  //El usuario puede cerrar el haciendo click en la x asi removiendo el aviso rapidamente 
  botonCerrar.addEventListener("click", function () {
    
    contenedor.removeChild(aviso);
  });


  //Establecemos una funcion para que automaticamente se cierre el aviso
  setTimeout(function () {
    // Revisamos que todavia exista por si el usuario ya lo cerro
    if (aviso.parentNode !== null) {
      contenedor.removeChild(aviso);
    }
  }, duracion);// aqui se hace influir el valor de duracion
}


// ventana  para mostrar contenido mejorando sobre el uso de un alert
/*Como se usa
   abrirVentana("Confirmar", "Seguro que quieres continuar?");*/
function abrirVentana(titulo, contenido) {

  // creamos el fondo oscuro que cubre toda la pantalla para crear un desenfoque del fondo
  var fondo = document.createElement("div");
  fondo.setAttribute("class", "fondo-oscuro");

  // creamos la caja blanca de la ventana
  var caja = document.createElement("div");
  caja.setAttribute("class", "caja-ventana");

  // Armamos el contenido a la caja completa
  caja.innerHTML =
    "<div class='cabecera-ventana'>" +
      "<h3>" + titulo + "</h3>" +
      "<button class='boton-cerrar-ventana'>x</button>" +
    "</div>" +
    "<div class='cuerpo-ventana'>" +
      "<p>" + contenido + "</p>" +
    "</div>";

  fondo.appendChild(caja);
//ponemos la caja en el fondo
  //se muestra en si todo a la pantalla
  document.body.appendChild(fondo);

  // se le da funcion al boton cerrar asignando a quien
  var botonCerrar = caja.querySelector(".boton-cerrar-ventana");

  // si el usuario hace clic en la x se cierra la ventana
  botonCerrar.addEventListener("click", function () {
    document.body.removeChild(fondo);
  });

  //si el usuario hace clic afuera de la caja blanca tambien se cierra
  fondo.addEventListener("click", function (evento) {
    if (evento.target === fondo) {
      document.body.removeChild(fondo);
    }
  });
}
/* 
   COMPONENTE 3: Acordeon desplegable

   Como se usa
   crearAcordeon("mi-acordeon", [
     { titulo: "Pregunta 1", contenido: "Respuesta 1" },
     { titulo: "Pregunta 2", contenido: "Respuesta 2" }
   ]);
  */

//Acordeon recibe el id del contenedor donde van a estar, una lista de texto en formato
function crearAcordeon(idContenedor, listaPreguntas) {

  var contenedor = document.getElementById(idContenedor);

  if (contenedor === null) {
    console.log("No se encontro el contenedor con id: " + idContenedor);
    return;
  }
  //ir manejando la lista de texto
  for (var i = 0; i < listaPreguntas.length; i++) {
    var pregunta = listaPreguntas[i].titulo;
    var respuesta = listaPreguntas[i].contenido;
    var bloque = document.createElement("div");
    bloque.setAttribute("class", "bloque-pregunta");

    bloque.innerHTML =
      "<button class='boton-pregunta'>" + pregunta + " <span class='signo'>+</span></button>" +
      "<div class='texto-respuesta'><p>" + respuesta + "</p></div>";
 //signos del diseno del componente y como cambia de + a -
    contenedor.appendChild(bloque);

    var boton = bloque.querySelector(".boton-pregunta");
    var textoRespuesta = bloque.querySelector(".texto-respuesta");
    var signo = bloque.querySelector(".signo");

 // le agregamos el clic usando una funcion aparte
    agregarClicAcordeon(boton, textoRespuesta, signo);
  }
}

// Funcion aparte para que cada boton sepa cuales son sus elementos
function agregarClicAcordeon(boton, textoRespuesta, signo) {

  boton.addEventListener("click", function () {

    // Si ya esta abierto que tiene una altura maxima puesta, lo cerramos
    if (textoRespuesta.style.maxHeight) {
      textoRespuesta.style.maxHeight = null;
      signo.innerHTML = "+";
    } else {
      // Si esta cerrado lo abrimos poniendole una altura maxima
      textoRespuesta.style.maxHeight = textoRespuesta.scrollHeight + "px";
      signo.innerHTML = "−";
    }
  });
}


/*
   COMPONENTE 4 mensaje flotante al pasar el mouse
   Como se usa en el HTML:
   <button data-mensaje="Guarda los cambios">Guardar</button>
              ^
              |
              |
   Y en el JavaScript, se llama UNA sola vez:
   activarTooltips(); para activar todos
  */

function activarTooltips() {

  //  buscamos si ya existe el globo de mensaje se reutiliza para todos
  var globo = document.getElementById("globo-mensaje");

  // PASO 2: si no existe, lo creamos
  if (globo === null) {
    globo = document.createElement("div");
    globo.setAttribute("id", "globo-mensaje");
    document.body.appendChild(globo);
  }

  // buscamos todos los elementos que tengan el atributo data-mensaje
  var elementos = document.querySelectorAll("[data-mensaje]");

  // recorremos cada elemento encontrado con un for normal
  for (var i = 0; i < elementos.length; i++) {
    activarUnTooltip(elementos[i], globo);
  }
}

// funcion aparte que le agrega el comportamiento a UN solo elemento
function activarUnTooltip(elemento, globo) {

  // Cuando el mouse entra al elemento, mostramos el mensaje
  elemento.addEventListener("mouseenter", function () {
    var texto = elemento.getAttribute("data-mensaje");
    globo.innerHTML = texto;
    globo.style.opacity = "1";
  });

  // Mientras el mouse se mueve encima, el globo lo va siguiendo
  elemento.addEventListener("mousemove", function (evento) {
    globo.style.left = (evento.pageX + 15) + "px";
    globo.style.top = (evento.pageY + 15) + "px";
  });

  // Cuando el mouse sale del elemento, se oculta el mensaje
  elemento.addEventListener("mouseleave", function () {
    globo.style.opacity = "0";
  });
}


/*
   COMPONENTE 5: tarjeta prearmada con imagen
   Sirve para mostrar servicios, caracteristicas o redes sociales,
   cada una con su propia imagen, titulo y descripcion.
   Como usar
   crearTarjetas("mis-tarjetas", [
     { icono: "img/rapido.png", titulo: "Rapido", descripcion: "Se instala en segundos" },
     { icono: "img/seguro.png", titulo: "Seguro", descripcion: "Sin librerias externas" }
   ]); 

  */

function crearTarjetas(idContenedor, listaTarjetas) {

  //  buscamos el contenedor donde vamos a poner las tarjetas
  var contenedor = document.getElementById(idContenedor);

  //  si no existe ese contenedor avisamos en consola y no seguimos esta vez no creamos uno
  if (contenedor === null) {
    console.log("No se encontro el contenedor con id: " + idContenedor);
    return;
  }

  //  le ponemos la clase que las acomoda en fila 
  contenedor.setAttribute("class", "fila-tarjetas");

  //recorremos la lista de tarjetas una por una
  for (var i = 0; i < listaTarjetas.length; i++) {
    var icono = listaTarjetas[i].icono;
    var titulo = listaTarjetas[i].titulo;
    var descripcion = listaTarjetas[i].descripcion;

    // creamos la tarjeta visual
    var tarjeta = document.createElement("div");
    tarjeta.setAttribute("class", "tarjeta-icono");
    // armamos el contenido con la imagen, el titulo y la descripcion
    tarjeta.innerHTML =
      "<img src='" + icono + "' alt='" + titulo + "' class='tarjeta-imagen' />" +
      "<h3 class='tarjeta-titulo'>" + titulo + "</h3>" +
      "<p class='tarjeta-descripcion'>" + descripcion + "</p>";

    //agregamos la tarjeta al contenedor
    contenedor.appendChild(tarjeta);
  }
}


/*
   COMPONENTE 6: BARRA DE PROGRESO ANIMADA
   Como se usa
   crearBarraProgreso("mi-barra", 67, "Progreso del curso 67%");
  */

function crearBarraProgreso(idContenedor, porcentaje, etiqueta) {

  // buscamos el contenedor donde va la barra
  var contenedor = document.getElementById(idContenedor);

  // si no existe, avisamos en consola y no seguimos
  if (contenedor === null) {
    console.log("No se encontro el contenedor con id: " + idContenedor);
    return;
  }

  // creamos el fondo de la barra
  var barraFondo = document.createElement("div");
  barraFondo.setAttribute("class", "barra-fondo");

  // creamos la parte de color que se va a rellenar
  var barraRelleno = document.createElement("div");
  barraRelleno.setAttribute("class", "barra-relleno");
  barraRelleno.innerHTML = "<span class='barra-texto'>" + etiqueta + "</span>";

  // metemos el relleno dentro del fondo
  barraFondo.appendChild(barraRelleno);

  // mostramos la barra en la pantalla (todavia en 0%)
  contenedor.appendChild(barraFondo);

  //  despues de un momento, la hacemos crecer hasta el porcentaje pedido
  // el pequeño retraso con setTimeout es lo que permite ver la animacion
  setTimeout(function () {
    barraRelleno.style.width = porcentaje + "%";
  }, 100);
}
