// Le slider

// Je créé mes variables (ou constantes) que je vais manipulé dans le js

const slides = document.getElementsByClassName("slide");
const radios = document.getElementsByClassName("button-radio");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const slider = document.getElementById("slider");
const buttonsRadio = document.getElementById("buttons-radio");
// x representera la position dans le slider
let x = 0;

// La fonction pressButton permettra de changer d'image par translation

function pressButton() {
    slider.style.transform = "translate(" + x + "px)";
    let radioActive = document.querySelector(".active");
    radioActive.classList.remove("active");
    radios[x/-325].classList.add("active");
    // 325 est la taille d'une image + la marge
} 

// Lorsqu'on appuie sur "précédent"

prev.addEventListener("click", (event)=> {
    if (slides.length > 1) {
        x = x + 325;
        if (x > 0) {
            x = (slides.length-1)*-325;
        }
        pressButton();
    } else if (slides.length == 1) {
        alert("Il n'y a qu'une image dans le slider, et tu essaies de passer à la précédente ?!?");
    } else {
        alert("Ca n'a pas l'air de fonctionner...");
    }
})

// Lorsqu'on appuie sur "suivant"

next.addEventListener("click", (event)=> {
    if (slides.length > 1) {
        x = x - 325;
        if (x < (slides.length-1)*-325) {
            x = 0;
        }
        pressButton();
    } else if (slides.length == 1) {
        alert("Il n'y a qu'une image dans le slider, et tu essaies de passer à la suivante ?!?");
    } else {
        alert("Ca n'a pas l'air de fonctionner...");
    }
})

// on fixe la valeur de x par rapport au nombre d'images (ou de boutons car il y a un bouton par image)
for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener("click", (event)=> {
        x = i * -325;
        pressButton();
    }) 
}

// On définit l'evenement lorsqu'on click sur le bouton "add image"

const addImage = document.getElementById("addImage");

addImage.addEventListener("click", (event)=> {
      var newRadio = document.createElement('div');
      newRadio.className = "button-radio";
      document.getElementById("buttons-radio").appendChild(newRadio);
      var newSlide = document.createElement('div');
      newSlide.className = "slide w-300px h-200px flex-shrink-0 ms-25px";
      document.getElementById("slider").appendChild(newSlide);
      var newImage = document.createElement("img");
      newImage.src = "https://picsum.photos/300/200?random=" + (slides.length);
      newSlide.appendChild(newImage);
      let radioActive = document.querySelector(".active");
      if (radioActive == null) {
        newRadio.classList.add("active");
    }
})

// On définit l'evenement lorsqu'on click sur le bouton "remove it"

const removeIt = document.getElementById("removeIt");

removeIt.addEventListener("click", (event)=> {
    if (radios.length > 0) {
        let elem2 = slider.lastChild;
        let elem1 = buttonsRadio.lastChild;
        buttonsRadio.removeChild(elem1);
        slider.removeChild(elem2);
        let radioActive = document.querySelector(".active");
        if ((radioActive == null) && (radios.length != 0)) {
            x = x + 325;
            radios[x/-325].classList.add("active");
            slider.style.transform = "translate(" + x + "px)";
        }
    } else {
        alert("Tu cherches à supprimer quoi?")
    }  
})


// Le Menu burger

// On définit les variables

const burger = document.getElementById("burger");
let menu_burger = document.getElementById("menu_burger");
const quit = document.getElementById("quit");

// On définit les evenements lorsque l'on click sur les boutons

burger.addEventListener("click", (event)=> {
    menu_burger.style.top = "100px";
})

quit.addEventListener("click", (event)=> {
    menu_burger.style.top = "-300vh";
})
