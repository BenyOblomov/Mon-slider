const slides = document.getElementsByClassName("slide");
const radios = document.getElementsByClassName("button-radio");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const slider = document.getElementById("slider");
const buttonsRadio = document.getElementById("buttons-radio");
let x = 0;

function pressButton() {
    slider.style.transform = "translate(" + x + "px)";
    let radioActive = document.querySelector(".active");
    radioActive.classList.remove("active");
    radios[x/-350].classList.add("active");
} 

prev.addEventListener("click", (event)=> {
    if (slides.length > 1) {
        x = x + 350;
        if (x > 0) {
            x = (slides.length-1)*-350;
        }
        pressButton();
    } else if (slides.length == 1) {
        alert("Il n'y a qu'une image dans le slider, et tu essaies de passer à la précédente ?!?");
    } else {
        alert("Ca n'a pas l'air de fonctionner...");
    }
})

next.addEventListener("click", (event)=> {
    if (slides.length > 1) {
        x = x - 350;
        if (x < (slides.length-1)*-350) {
            x = 0;
        }
        pressButton();
    } else if (slides.length == 1) {
        alert("Il n'y a qu'une image dans le slider, et tu essaies de passer à la suivante ?!?");
    } else {
        alert("Ca n'a pas l'air de fonctionner...");
    }
})

for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener("click", (event)=> {
        x = i * -350;
        pressButton();
    }) 
}

const addImage = document.getElementById("addImage");

addImage.addEventListener("click", (event)=> {
      var newRadio = document.createElement('div');
      newRadio.className = "button-radio";
      document.getElementById("buttons-radio").appendChild(newRadio);
      var newSlide = document.createElement('div');
      newSlide.className = "slide w-300px h-200px flex-shrink-0 ms-50px";
      document.getElementById("slider").appendChild(newSlide);
      var newImage = document.createElement("img");
      newImage.src = "https://picsum.photos/300/200?random=" + (slides.length);
      newSlide.appendChild(newImage);
      let radioActive = document.querySelector(".active");
      if (radioActive == null) {
        newRadio.classList.add("active");
    }
})

const removeIt = document.getElementById("removeIt");

removeIt.addEventListener("click", (event)=> {
    if (radios.length > 0) {
        let elem2 = slider.lastChild;
        let elem1 = buttonsRadio.lastChild;
        buttonsRadio.removeChild(elem1);
        slider.removeChild(elem2);
        let radioActive = document.querySelector(".active");
        if ((radioActive == null) && (radios.length != 0)) {
            x = x + 350;
            radios[x/-350].classList.add("active");
            slider.style.transform = "translate(" + x + "px)";
        }
    } else {
        alert("Tu cherches à supprimer quoi?")
    }  
})
