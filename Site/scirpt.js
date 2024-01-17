

/* --------Cookie alert--------- */

function setCookie() {
  console.log('set browser cookie');
  document.querySelector('.cookie').style.display = 'none';
}

/* --------Curseur--------- */

// Récupérer la référence vers le curseur
const cursor = document.querySelector(".cursor");
var timeout;

// Gérer le mouvement du curseur
document.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;

  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
  cursor.style.display = "block";

  // Arrêter le mouvement du curseur après un certain délai d'inactivité
  function mouseStopped() {
    cursor.style.display = "none";
  }

  clearTimeout(timeout);
  timeout = setTimeout(mouseStopped, 1000);
});

// Masquer le curseur lorsque la souris quitte la zone des particules
document.addEventListener("mouseout", () => {
  cursor.style.display = "none";
});

// Gérer les effets de survol sur les liens et les boutons
var links = document.querySelectorAll("a");
var buttons = document.querySelectorAll("button");

// Parcourir les liens
links.forEach(function (link) {
  // Au survol du lien
  link.addEventListener("mouseover", function () {
    cursor.classList.add("cursor-large");
  });

  // Lorsque le curseur quitte le lien
  link.addEventListener("mouseout", function () {
    cursor.classList.remove("cursor-large");
  });

  // Au clic sur le lien
  link.addEventListener("click", function () {
    cursor.style.display = "none";
    setTimeout(function () {
      cursor.style.display = "block";
    }, 1000);
  });
});

// Parcourir les boutons
buttons.forEach(function (button) {
  // Au survol du bouton
  button.addEventListener("mouseover", function () {
    cursor.classList.add("cursor-large");
  });

  // Lorsque le curseur quitte le bouton
  button.addEventListener("mouseout", function () {
    cursor.classList.remove("cursor-large");
  });

  // Au clic sur le bouton
  button.addEventListener("click", function () {
    cursor.style.display = "none";
    setTimeout(function () {
      cursor.style.display = "block";
    }, 1000);
  });
});


/* --------Nav-burger-------- */
// Récupérer les éléments du menu burger
const checkbox = document.getElementById('navbar-toggle-checkbox');
const navbarCollapse = document.getElementById('navbarNav');

// Ajouter un écouteur d'événement pour le changement d'état de la case à cocher
checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    navbarCollapse.style.display = 'block';
  } else {
    navbarCollapse.style.display = 'none';
  }
});



/* --------Dropdown-Faq--------- */


function toggleDropdown(element) {
  element.parentNode.classList.toggle('open');
}

/* --------Tremblements chiffres page service--------- */


function handleScroll() {
  const chiffresElements = document.querySelectorAll('.title-chiffres');

  chiffresElements.forEach(element => {
    const boundingRect = element.getBoundingClientRect();
    if (boundingRect.top < window.innerHeight && boundingRect.bottom >= 0) {
      element.classList.add('tremble');
    } else {
      element.classList.remove('tremble');
    }
  });
}
