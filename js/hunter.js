
const $seccionEleccionPersonaje = document.getElementById("eleccion-personaje");
const $seccionBatalla = document.getElementById("batalla");

const $contenedorPersonaje = document.getElementById("contenedor-personaje");
const $nombreFotoJugador = document.getElementById("nombre-foto-jugador");
const $vidaJugador = document.getElementById("vida-jugador");
const $contenedorHabilidadesJugador = document.getElementById("contenedor-habilidades-jugador");
const $vs = document.getElementById("vs");
const $nombreFotoEnemigo = document.getElementById("nombre-foto-enemigo");
const $vidaEnemigo = document.getElementById("vida-enemigo");
const $contenedorHabilidadesEnemigo = document.getElementById("contenedor-habilidades-enemigo");
const $resultadoBatalla = document.getElementById("resultado-batalla");

const $botonElegirPersonaje = document.getElementById("boton-elegir-personaje");
const $botonReiniciar = document.getElementById("boton-reiniciar");

const personajes = [];

let nombreJugador;
let fotoJugador;
let vidaJugador;
let habilidadJugador;
let botonHabJugador;


let nombreEnemigo;
let fotoEnemigo;
let vidaEnemigo;
let habilidadEnemigo;
let botonHabEnemigo;


let generarPersonajes;
let botones;

//Constantes - funciones
const aleatorio = (min, max) => {return Math.floor(Math.random() * (max - min + 1) + min)}
const generarTexto = (elemento, texto) => (elemento.innerHTML = texto);
// Constantes - funciones


class Cazadores {
    constructor(nombre, foto, vida) {
        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
        this.habilidades = [];
    }
}

let Gon = new Cazadores("Gon", "./assets/Gon.png", 120);
let Killua = new Cazadores("Killua", "./assets/Killua.png", 110);
let Kurapika = new Cazadores("Kurapika", "./assets/Kurapika.png", 110);
let Leorio = new Cazadores("Leorio", "./assets/Leorio.png", 95);
let Hisoka = new Cazadores("Hisoka", "./assets/Hisoka.png", 130);

personajes.push(Gon, Killua, Kurapika, Leorio, Hisoka);


Gon.habilidades.push(
  { nombre: "Jajanken: Piedra", daño: 30 },
  { nombre: "Jajanken: Tijera", daño: 20 },
  { nombre: "Jajanken: Papel", daño: 20 }
);

Killua.habilidades.push(
  { nombre: "Palma Relámpago", daño: 25 },
  { nombre: "Yoyos", daño: 30 },
  { nombre: "Velocidad de Dios", daño: 20 }
);

Kurapika.habilidades.push(
  { nombre: "Cadenas Conjuradas", daño: 30 },
  { nombre: "Holy Chain", daño: 0, cura: 20 },
  { nombre: "Espadas Shikomizues", daño: 20 }
);

Leorio.habilidades.push(
  { nombre: "Cuchillo", daño: 20 },
  { nombre: "Golpe urdido", daño: 30 },
  { nombre: "Patada", daño: 20 }
);

Hisoka.habilidades.push(
  { nombre: "Goma Bungee", daño: 30 },
  { nombre: "Puño", daño: 20 },
  { nombre: "Lanzar Naipe", daño: 20 }
);



function iniciarJuego() {
    $seccionBatalla.style.display = "none";
    $botonElegirPersonaje.disabled = true;
    generarSeccionEleccionPersonajes();
}

function generarSeccionEleccionPersonajes() {
  personajes.forEach((elementoX) => {
    generarPersonajes = `
        <input type="radio" name="personaje" id=${elementoX.nombre} />
        <label for=${elementoX.nombre} class=${elementoX.nombre}>
        <p>${elementoX.nombre}</p>
        <img src=${elementoX.foto} alt=${elementoX.nombre}> </label>
        `;
    $contenedorPersonaje.innerHTML += generarPersonajes;
  });
  $contenedorPersonaje.addEventListener("click", habilitarBotonElegir);
  $botonElegirPersonaje.addEventListener("click", generarSeccionBatalla);
}

function generarSeccionBatalla() {
    $seccionEleccionPersonaje.style.display = "none";
    $botonReiniciar.style.display = "none";
    $seccionBatalla.style.display = "flex";
    generarPersonajeElegido();
}

function habilitarBotonElegir() {
    $botonElegirPersonaje.disabled = false;
}

function generarPersonajeElegido() {
    if (document.getElementById("Gon").checked === true) {
        nombreJugador = `<p>${Gon.nombre}</p>`;
        fotoJugador = `<img src=${Gon.foto} alt=${Gon.foto}></img>`;
        vidaJugador = Gon.vida;
        $nombreFotoJugador.innerHTML = nombreJugador + fotoJugador;
    } else if (document.getElementById("Killua").checked === true) {
        nombreJugador = `<p>${Killua.nombre}</p>`;
        fotoJugador = `<img src=${Killua.foto} alt=${Killua.foto}></img>`;
        vidaJugador = Killua.vida;
        $nombreFotoJugador.innerHTML = nombreJugador + fotoJugador;
    } else if (document.getElementById("Kurapika").checked === true) {
        nombreJugador = `<p>${Kurapika.nombre}</p>`;
        fotoJugador = `<img src=${Kurapika.foto} alt=${Kurapika.foto}></img>`;
        vidaJugador = Kurapika.vida;
        $nombreFotoJugador.innerHTML = nombreJugador + fotoJugador;
    } else if (document.getElementById("Leorio").checked === true) {
        nombreJugador = `<p>${Leorio.nombre}</p>`;
        fotoJugador = `<img src=${Leorio.foto} alt=${Leorio.foto}></img>`;
        vidaJugador = Leorio.vida;
        $nombreFotoJugador.innerHTML = nombreJugador + fotoJugador;
    } else if (document.getElementById("Hisoka").checked === true) {
        nombreJugador = `<p>${Hisoka.nombre}</p>`;
        fotoJugador = `<img src=${Hisoka.foto} alt=${Hisoka.foto}></img>`;
        vidaJugador = Hisoka.vida;
        $nombreFotoJugador.innerHTML = nombreJugador + fotoJugador;
    }
    generarTexto($vs, "VS")
    generarEnemigo()
}

function generarEnemigo() {
    let enemigoAleatorio = aleatorio(0, 4)
    nombreEnemigo = `<p>${personajes[enemigoAleatorio].nombre}</p>`;
    fotoEnemigo = `<img src=${personajes[enemigoAleatorio].foto} alt=${personajes[enemigoAleatorio].foto}></img>`;
    $nombreFotoEnemigo.innerHTML = nombreEnemigo + fotoEnemigo;
}



window.addEventListener("load", iniciarJuego);

    
    

    
    

    
    

    
    
    
    

    
    
    
    

    
    



    
    
    


// function generarTarjetaPersonaje() {
//     for (let i = 0 ; i < personajes.length; i++) {
//         if (personajes[i].inputPersonaje.checked == true) {
//             tarjetaPersonaje = `<img src=${personajes[i].foto} alt=${personajes.nombre}>
//             ${personajes[i].nombre}`;
//             $nombreFotoJugador.innerHTML = tarjetaPersonaje;
//             vidaJugador =  `Vida: ${personajes[i].vida}`;
//             $vidaJugador.innerHTML = vidaJugador

//             personajeJugador = personajes[i].id;

//             habilidadJugador = personajes[i].habilidades;
//         }
//     }
//     generarTexto($vs, "vs");
//     generarTarjetaEnemigo();
// }

// function generarTarjetaEnemigo() {
//     let numeroAleatorio = aleatorio(0, 4);
//     if (numeroAleatorio == personajeJugador) {
//         generarTarjetaEnemigo();
//     } else {
//         personajeEnemigo = `<img src=${personajes[numeroAleatorio].foto} alt=${personajes[numeroAleatorio].nombre}>
//         ${personajes[numeroAleatorio].nombre}`;
//         $nombreFotoEnemigo.innerHTML = personajeEnemigo;
//         vidaEnemigo = `Vida: ${personajes[numeroAleatorio].vida}`;
//         $vidaEnemigo.innerHTML = vidaEnemigo;
//         habilidadEnemigo = personajes[numeroAleatorio].habilidades;
//         generarBotonHab(habilidadEnemigo, $contenedorHabilidadesEnemigo);
//         generarBotonHab(habilidadJugador, $contenedorHabilidadesJugador);
       
//     }    
// };

// function generarBotonHab(habilidad, contenedor, boton) {
//         for (let index = 0; index < habilidad.length; index++) {
//             boton = ` <button onclick="ataques();" class="botones-habs" id="${habilidad[index].id}" >${habilidad[index].nombre} </button>`;
//             contenedor.innerHTML += boton;
//         }
// }


// function ataques() {
//     hacerDaño(habilidadJugador[0].daño)
//     console.log(habilidadJugador[0].daño)
// }

// let vidaJugador1 = 110;

// function hacerDaño(daño) {
//     console.log(vidaJugador1)
    
//     vidaJugador1 = vidaJugador1 - daño;
//     console.log(vidaJugador);
//     $vidaJugador.innerHTML = vidaJugador1;
// }









// const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota");
// const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
// const $sectionMensajes = document.getElementById("resultadohtml");
// const sectionReiniciar = document.getElementById("reiniciar");

// const botonMascotaJugador = document.getElementById("boton-mascota");
// const botonReiniciarJuego = document.getElementById("boton-reiniciar");

// const spanVidasJugador = document.getElementById("vidas-jugador");
// const spanVidasEnemigo = document.getElementById("vidas-enemigo");
// const $spanMascotaEnemigo = document.getElementById("mascota-enemigo");
// const $spanMascotaJugador = document.getElementById("mascota-jugador");

// const ataquesDelJugador = document.getElementById("ataques-del-jugador");
// const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo");
// const nuevoAtaqueDelJugador = document.createElement("p");
// const nuevoAtaqueDelEnemigo = document.createElement("p");

// const contenedorMascotas = document.getElementById("contenedor-mascotas");
// const $contenedorAtaques = document.getElementById("contenedor-ataques")

// let mokepones = [];
// let botones = [];

// let opcionDeMokepones

// let inputGon;
// let inputKillua;
// let inputKurapika;
// let inputLeorio;
// let inputHisoka;

// let mascotaJugador
// let ataquesMokepon
// let ataqueJugador = [];
// let preAtaqueEnemigo = [];
// let ataqueEnemigo = [];
// let muestraAtaqueJugador;
// let muestraAtaqueEnemigo;
// let victoriasJugador = 0
// let victoriasEnemigo = 0

// let botonFuego 
// let botonAgua
// let botonTierra 

// class Hunter {
//     constructor(nombre, foto, vida) {
//         this.nombre = nombre
//         this.foto = foto
//         this.vida = vida
//         this.ataques = []
//     }
// }

// let Gon = new Hunter("Gon", "./assets/Gon.png", 5);
// let Killua = new Hunter("Killua", "./assets/Killua.png", 5);
// let Kurapika = new Hunter("Kurapika", "./assets/Kurapika.png", 5);
// let Leorio = new Hunter("Leorio", "./assets/Leorio.png", 5);
// let Hisoka = new Hunter("Hisoka", "./assets/Hisoka.png", 5);

// mokepones.push(Gon, Killua, Kurapika, Leorio, Hisoka);

// Gon.ataques.push(
//   { nombre: "Piedra", id: "boton-fuego" },
//   { nombre: "Papel", id: "boton-agua" },
//   { nombre: "Tijera", id: "boton-tierra" },
// );

// Killua.ataques.push(
//   { nombre: "Piedra", id: "boton-fuego" },
//   { nombre: "Papel", id: "boton-agua" },
//   { nombre: "Tijera", id: "boton-tierra" }
// );

// Kurapika.ataques.push(
//   { nombre: "Piedra", id: "boton-fuego" },
//   { nombre: "Papel", id: "boton-agua" },
//   { nombre: "Tijera", id: "boton-tierra" }
// );

// Leorio.ataques.push(
//   { nombre: "Piedra", id: "boton-fuego" },
//   { nombre: "Papel", id: "boton-agua" },
//   { nombre: "Tijera", id: "boton-tierra" }
// );

// Hisoka.ataques.push(
//   { nombre: "Piedra", id: "boton-fuego" },
//   { nombre: "Papel", id: "boton-agua" },
//   { nombre: "Tijera", id: "boton-tierra" }
// );


// // console.log(mokepones) --- para ver en consola la variable/objeto/etc

// function aleatorio(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// function iniciarJuego() {
//     sectionReiniciar.style.display = "none";
//     sectionSeleccionarAtaque.style.display = "none";
//     sectionSeleccionarMascota.style.display = "flex";
    
//     mokepones.forEach((mokepon) => {
//       opcionDeMokepones = `
//         <input type="radio" name="mascota" id=${mokepon.nombre} />
//         <label class="${mokepon.nombre}" for=${mokepon.nombre} >
//                 <p>${mokepon.nombre} </p>
//                 <img src=${mokepon.foto} alt=${mokepon.nombre} >
//         </label>
//         `;
//         contenedorMascotas.innerHTML += opcionDeMokepones;
        
//       inputGon = document.getElementById("Gon");
//       inputKillua = document.getElementById("Killua");
//       inputKurapika = document.getElementById("Kurapika");
//       inputLeorio = document.getElementById("Leorio");
//       inputHisoka = document.getElementById("Hisoka");

//     }) 
//     botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
//     botonReiniciarJuego.addEventListener("click", reiniciarJuego);
// }


// function seleccionarMascotaJugador() {
//     sectionSeleccionarMascota.style.display = "none";
//     sectionSeleccionarAtaque.style.display = "flex";
//     if (inputGon.checked) {
//       $spanMascotaJugador.innerHTML = inputGon.id;
//       mascotaJugador = inputGon.id;
//     } else if (inputKillua.checked) {
//       $spanMascotaJugador.innerHTML = inputKillua.id;
//       mascotaJugador = inputKillua.id;
//     } else if (inputKurapika.checked) {
//       $spanMascotaJugador.innerHTML = inputKurapika.id;
//       mascotaJugador = inputKurapika.id;
//     } else if (inputLeorio.checked) {
//       $spanMascotaJugador.innerHTML = inputLeorio.id;
//       mascotaJugador = inputLeorio.id;
//     } else if (inputHisoka.checked) {
//       $spanMascotaJugador.innerHTML = inputHisoka.id;
//       mascotaJugador = inputHisoka.id;
//     } else {
//       alert("Debes seleccionar una mascota para poder pelear");
//     }
//     extraerAtaques(mascotaJugador);
//     seleccionarMascotaEnemigo();
// }

// function extraerAtaques(mascotaJugador) {
//   let ataques = [];
//     for (let i = 0; i < mokepones.length; i++) {
//         if (mascotaJugador === mokepones[i].nombre) {
//             ataques = mokepones[i].ataques
//         }
//     }
//     mostrarAtaques(ataques)
// }

// function mostrarAtaques(ataques) {
//     ataques.forEach((ataque) => {
//         ataquesMokepon = `
//         <button id=${ataque.id} class="boton-ataque-visual">${ataque.nombre}</button>
//         `
//         $contenedorAtaques.innerHTML += ataquesMokepon;
//     })

//     botonFuego = document.getElementById("boton-fuego");
//     botonAgua = document.getElementById("boton-agua");
//     botonTierra = document.getElementById("boton-tierra");
//     botones = document.querySelectorAll(".boton-ataque-visual");
//     // Codigo viejo
//     // botonFuego.addEventListener("click", ataqueFuego);
//     // botonAgua.addEventListener("click", ataqueAgua);
//     // botonTierra.addEventListener("click", ataqueTierra);
// }

// function seleccionarMascotaEnemigo() {
//     let eleccionEnemigo = aleatorio(0, mokepones.length - 1);
//     preAtaqueEnemigo = mokepones[eleccionEnemigo].ataques;
//     $spanMascotaEnemigo.innerHTML = mokepones[eleccionEnemigo].nombre;

//     secuenciaAtaque();
// }

// function ataqueEnemigoDefinitivo(preAtaqueEnemigo) {
//   preAtaqueEnemigo.forEach((boton2) => {
//     if (boton2.nombre === "Piedra") {
//       ataqueEnemigo.push("Piedra");
//     } else if (boton2.nombre === "Papel") {
//       ataqueEnemigo.push("Papel");
//     } else {
//       ataqueEnemigo.push("Tijera");
//     }
//   });
//     ataqueEnemigo.sort(() => aleatorio(0, mokepones.length - 1));
// }

// function secuenciaAtaque() {
//   botones.forEach((boton) => {
//     boton.addEventListener("click", (e) => {
//       if (e.target.textContent === "Piedra") {
//         ataqueJugador.push("Piedra");
//         boton.style.background = "#112f58";
//       } else if (e.target.textContent === "Papel") {
//         ataqueJugador.push("Papel");
//         boton.style.background = "#112f58";
//       } else {
//         ataqueJugador.push("Tijera");
//         boton.style.background = "#112f58";
//       }
//         combate();
//     });  
//   });  
// }
//   //   // Función tradicional

// // function iniciarPelea() {
// //   if (ataqueJugador.length === 3) {
// //       ataqueEnemigoDefinitivo(preAtaqueEnemigo);
      
// //   } else {
// //   }
// // }

// function indexCadaUno(index1, index2) {
//     muestraAtaqueJugador = ataqueJugador[index1];
//     muestraAtaqueEnemigo = ataqueEnemigo[index2];
// }

// function combate() {
//     for (let index = 0; index < ataqueJugador.length; index++) {
//         if (ataqueJugador[index] === ataqueEnemigo[index]) {
//             indexCadaUno(index, index);
//             crearMensaje("Empate 😡");
//             spanVidasJugador.innerHTML = victoriasJugador;
//             spanVidasEnemigo.innerHTML = victoriasEnemigo; 
//         }
//         else if (ataqueJugador[index] === "Piedra" && ataqueEnemigo[index] === "Tijera") {
//             indexCadaUno(index, index);
//             crearMensaje("Victoria 🎊🥳");
//             victoriasJugador++;
//             spanVidasJugador.innerHTML = victoriasJugador;
//             spanVidasEnemigo.innerHTML = victoriasEnemigo; 
//         }
//         else if (ataqueJugador[index] === "Tiejra" && ataqueEnemigo[index] === "Papel") {
//             indexCadaUno(index, index);
//             crearMensaje("Victoria 🎊🥳");
//             victoriasJugador++;
//             spanVidasJugador.innerHTML = victoriasJugador;
//             spanVidasEnemigo.innerHTML = victoriasEnemigo; 
//         } else if (ataqueJugador[index] === "Papel" && ataqueEnemigo[index] === "Piedra") {
//             indexCadaUno(index, index);
//             crearMensaje("Victoria 🎊🥳");
//             victoriasJugador++;
//             spanVidasJugador.innerHTML = victoriasJugador;
//             spanVidasEnemigo.innerHTML = victoriasEnemigo; 
//         } else {
//             indexCadaUno(index, index);
//             crearMensaje("Perdida 😭🤷‍♂️");
//             victoriasEnemigo++;
//             spanVidasJugador.innerHTML = victoriasJugador;
//             spanVidasEnemigo.innerHTML = victoriasEnemigo; 
//         }
//     }
//     revisarVidas();
// }
  
// function revisarVidas() {
//     if (victoriasJugador === victoriasEnemigo) {
//         mensajeFinJuego("Esto fue un empate")
//     } else if (victoriasJugador > victoriasEnemigo) {
//         mensajeFinJuego("FELICITACIONES! Ganaste 🎉");
//     } else {
//         mensajeFinJuego("Lo siento, Perdiste 😭");
//     }
// }

// function reiniciarJuego() {
//         location.reload()
// }

// function crearMensaje(resultadoMensaje) {
//     $sectionMensajes.innerHTML = "<br/ >" + resultadoMensaje;
     
//     nuevoAtaqueDelJugador.innerHTML += "<br/ >" + muestraAtaqueJugador;
//     nuevoAtaqueDelEnemigo.innerHTML += "<br/ >" + muestraAtaqueEnemigo;
//     ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
//     ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
// }

// function mensajeFinJuego(resultadoFinal) {
//     $sectionMensajes.innerHTML += resultadoFinal;

//     // botonFuego.disabled = true;
//     // botonAgua.disabled = true;
//     // botonTierra.disabled = true;

//     sectionReiniciar.style.display = "flex";
// }

// window.addEventListener("load", iniciarJuego);
 