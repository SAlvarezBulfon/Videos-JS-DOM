//console.log(document);

//-----SELECTORES-------

//---- getElementById ----
//console.log(document.getElementById("header"));

//---- getElementsByClassName ----
//console.log(document.getElementsByClassName("border-grey"));
//Devuelve una coleccion de html


//----- getElementsByTagName ----
//console.log(document.getElementsByTagName("li"));
//Devuelve una coleccion de html con los elementos li

// ----- getElementByName -----
//Filtrar por aquellas etiquetas que tienen la propiedad name
//console.log(document.getElementsByName("header"));

//----- querySelector -----
//Devuelve el primer elemento que coincida con el selector
// ----- EJEMPLOS -----
//console.log(document.querySelector("li"));
//console.log(document.querySelector(".border-grey"));
//console.log(document.querySelector("#header"));
//console.log(document.querySelector("div ul li"));


//----- querySelectorAll -----
//Devuelve todos los elementos que coincidan con el selector
// ----- EJEMPLOS -----
//console.log(document.querySelectorAll("li"));
//console.log(document.querySelectorAll(".border-grey"));
//console.log(document.querySelectorAll("#header"));


//NODO --  SON LOS ELEMENTOS HTML QUE COMPONEN EL DOM
//const elemento = document.getElementById("header");
//console.log(elemento.children);
//console.log(elemento.parentElement);

// ES DINÁMICA
// const lista1 = document.getElementsByClassName("border-grey");

//LISTA ESTÁTICA
// const lista2 = document.querySelectorAll(".border-grey");

//Transformar en array
// const array = [...lista1];
// console.log(array.forEach((elemento) => console.log(elemento)));


// ----- CREAR ELEMENTOS -----
//const titulo2 = document.createElement("h2");
//const textoTitulo2 = document.createTextNode("Título 2");

//const comentario = document.createComment("Comentario");

// CLONAR ELEMENTOS
//const articulo = document.querySelector("article");
//articulo.isConnected; // true
//const articulo2 = articulo.cloneNode(true/false);

// ----- AÑADIR ELEMENTOS -----
//const section = document.querySelector("section");
//section.appendChild(articulo2);

//section.insertAdjacentElement("beforebegin", articulo2);  --> Antes de abrir la etiqueta
//section.insertAdjacentElement("afterbegin", articulo2);  --> Después de abrir la etiqueta
//section.insertAdjacentElement("beforeend", articulo2);  --> Antes de cerrar la etiqueta
//section.insertAdjacentElement("afterend", articulo2);   --> Después de cerrar la etiqueta

//section.insertAdjecentText("beforebegin", "Texto");
//section.insertAdjacentHTML("beforebegin", "<h2>Titulo</h2>");

// ----- SOBREESCRIBIR ELEMENTOS -----
//section.innerHTML = "<h2>Titulo</h2>"; --> Sobreescribe el contenido
//section.outerHTML = "<h2>Titulo</h2>"; --> Sobreescribe el contenido y la etiqueta

//section.getAttribute("class"); --> Devuelve el valor del atributo
//section.setAttribute("class", "nueva-clase"); --> Modifica el valor del atributo
//section.removeAttribute("class"); --> Elimina el atributo

//section.classList.add("nueva-clase"); --> Añade una clase
//section.classList.remove("nueva-clase"); --> Elimina una clase
//section.classList.toggle("nueva-clase"); --> Añade o elimina una clase
//section.classList.contains("nueva-clase"); --> Devuelve true o false si contiene la clase


//-- ELIMINAR ELEMENTOS --
//section.remove(); --> Elimina el elemento
//section.removeChild(elemento); --> Elimina el elemento hijo


// ----- EVENTOS -----

// const titulo2 = document.getElementById("TituloForm");

// titulo2.addEventListener("click", (e) => {
//     console.log(e);
//     console.log(e.target);
//     console.log(e.target.id);
//     console.log(e.target.textContent);
//     console.log("Haciendo click en el titulo del formulario")
// });


// document.addEventListener("DOMContentLoaded", (e) => {
//     console.log("El contenido se ha cargado");
// });

// const form = document.getElementById("formulario");
// form.addEventListener("submit", (e) => {
//     const {name, email, password} = e.target;
//     e.preventDefault();
//     if (name.value === "") {
//         alert("El nombre es obligatorio");
//         return;
//     }
//     console.log(email.value + " " + password.value + " " + name.value);
//     console.log("Enviando formulario");
// });


// ----- EVENT BUBBLING -----
const form = document.querySelector("#formulario");

const enviarFormulario = (e) => {
    e.preventDefault();
    console.log("Enviando formulario");
}

form.addEventListener("submit", enviarFormulario);

const section = document.querySelector("#section");
const titulo2 = document.querySelector("#TituloForm");

// titulo2.addEventListener("click", (e) => {
//     console.log(e.bubbles, e.cancelBubble); // --> Devuelve true o false si el evento se propaga
//     e.stopPropagation(); // --> Elimina la propagación del evento
//     console.log(e.bubbles, e.cancelBubble); // cancelBubble --> esta en desuso
//     console.log("Haciendo click en el titulo del formulario");
// });

titulo2.addEventListener("click", (e) => {
    console.log("Haciendo click en el titulo del formulario");
});
section.addEventListener("click", (e) => {
    console.log(e.target, e.currentTarget);
    console.log("Haciendo click en el section");
},
{
    capture: true, // --> Captura el evento en el orden inverso
});