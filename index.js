// Je récupère ma div principale
const slideShow = document.querySelector(".slideshow");
// Je fais un array avec les 3 slides de la div principale
const heroBannersArray = slideShow.querySelectorAll(".hero-banner");

// Je fais une fonction pour déplacer toutes les 8 sec ma class .active
const autoAddClass = () => {
  // Pour chaque element de mon array de slides
  heroBannersArray.forEach((herobanner, index, arr) => {
    // Si il y en a un qui contient la classe active
    if (herobanner.classList.contains("active")) {
      // J'attends 8 sec et
      setTimeout(() => {
        // si je suis au dernier element de l'array
        if ((index + 1) === arr.length) {
          // alors je lui retire la classe active
          arr[arr.length - 1].classList.remove("active")
          // et je la remets au premier
          arr[0].classList.add("active")
        }
        // sinon
        else {
          // J'enlève la class .active
          herobanner.classList.remove("active");
          // Et je la mets à l'element suivant de l'array
          arr[index + 1].classList.add("active")
        }
        // Je relance ma fonction pour créer une boucle
        autoAddClass()
      }, (8000));
    }
  })
}
autoAddClass()
