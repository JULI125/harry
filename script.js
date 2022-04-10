import {characters} from "./da.js";//../data/data.js

// capturar el formulario - escuchar el evento del boton

let personaje;
let form = document.getElementById('form');
let conten = document.querySelector('div');
let boton = document.getElementById('btn');

form.addEventListener('click', (e)=>{
    let id = e.target.id
    if(id == "btn") {
        escoger()
    }
    console.log(id);
})

document.addEventListener('DOMContentLoaded', (e) => {
    
    escoger();
});

 // Hago la funcion para escoger la carta random
 
function escoger(){
    let r = Math.floor(Math.random()*6);
    console.log("Aparecio una carta al azar");
    personaje= characters[r]
    console.log(personaje)
      ok();
}
// llamo el html
    function ok(){
        
        const { id, name, image, house, description} = personaje;
          form.innerHTML =
           `<h1>Personajes de hogwart</h1><br>
           <div class="cartas">
           <h2 class="name">${personaje["name"]}</h2><br>
           <img src="${personaje["image"]}" class="image" alt=""> 
           <p class="house">${personaje["house"]}</p><br>
           <p class="description">${personaje["description"]}</p>
           <div class="btn-btn">
           <input type="button" id="btn" value="Presiona!">
           </div>
           </div>`
         
    }
