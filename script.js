// ============================================
// FONCTIONNALITÉ 1 & 1-bis : Clic sur le footer avec compteur
// ============================================

// 1. Pointer sur l'élément footer
let footer = document.querySelector("footer");
console.log("Footer trouvé :", footer);

// 2. Déclarer le compteur (en dehors du listener)
let compteurClics = 0;

// 3. Ajouter l'événement click avec incrémentation
footer.addEventListener("click", function() {
  compteurClics++;
  console.log("clic numéro " + compteurClics);
});

// ============================================
// FONCTIONNALITÉ 2 : Hamburger menu toggle
// ============================================

// 1. Pointer sur le bouton hamburger
let hamburgerBtn = document.querySelector(".navbar-toggler");
console.log("Bouton hamburger trouvé :", hamburgerBtn);

// 2. Pointer sur le menu caché
let navbarHeader = document.getElementById("navbarHeader");
console.log("Menu navbar trouvé :", navbarHeader);

// 3. Au clic, toggle la classe "collapse"
hamburgerBtn.addEventListener("click", function() {
  navbarHeader.classList.toggle("collapse");
});

// ============================================
// FONCTIONNALITÉ 3 : Edit card 1 → texte rouge
// ============================================

// 1. Pointer sur la première card
let firstCard = document.getElementsByClassName("card")[0];
console.log("Première card trouvée :", firstCard);

// 2. Pointer sur le texte de cette card
let firstCardText = firstCard.querySelector(".card-text");
console.log("Texte de la card :", firstCardText);

// 3. Pointer sur le bouton Edit de cette card
let firstCardEditBtn = firstCard.querySelector(".btn-outline-secondary");
console.log("Bouton Edit trouvé :", firstCardEditBtn);

// 4. Au clic sur Edit, mettre le texte en rouge (irréversible)
firstCardEditBtn.addEventListener("click", function() {
  firstCardText.style.color = "red";
});

// ============================================
// FONCTIONNALITÉ 4 : Edit card 2 → toggle vert
// ============================================

// 1. Pointer sur la deuxième card
let secondCard = document.getElementsByClassName("card")[1];
console.log("Deuxième card trouvée :", secondCard);

// 2. Pointer sur le texte de cette card
let secondCardText = secondCard.querySelector(".card-text");
console.log("Texte de la card 2 :", secondCardText);

// 3. Pointer sur le bouton Edit de cette card
let secondCardEditBtn = secondCard.querySelector(".btn-outline-secondary");
console.log("Bouton Edit card 2 trouvé :", secondCardEditBtn);

// 4. Au clic sur Edit, toggle vert/normal
secondCardEditBtn.addEventListener("click", function() {
  if (secondCardText.style.color === "green") {
    secondCardText.style.color = "";
  } else {
    secondCardText.style.color = "green";
  }
});

// ============================================
// FONCTIONNALITÉ 5 : Mode nucléaire ☢️
// ============================================

// 1. Pointer sur la navbar
let navbar = document.querySelector(".navbar");
console.log("Navbar trouvée :", navbar);

// 2. Pointer sur le tag <link> de Bootstrap
let bootstrapCSS = document.querySelector("link[rel='stylesheet']");
console.log("Bootstrap CSS trouvé :", bootstrapCSS);

// 3. Au double-clic, toggle disabled sur le <link>
navbar.addEventListener("dblclick", function() {
  bootstrapCSS.disabled = !bootstrapCSS.disabled;
});

// ============================================
// FONCTIONNALITÉ 6 : Hover View → réduction card
// ============================================

// 1. Récupérer toutes les cards
let allCards = document.getElementsByClassName("card");
console.log("Toutes les cards :", allCards);

// 2. Boucle sur chaque card (IMPORTANT: utiliser let, pas var)
for (let i = 0; i < allCards.length; i++) {
  let card = allCards[i];
  let cardText = card.querySelector(".card-text");
  let cardImage = card.querySelector(".card-img-top");
  let viewBtn = card.querySelector(".btn-success");

  console.log("Card " + i + " - View btn:", viewBtn);
  console.log("Card " + i + " - Text:", cardText);
  console.log("Card " + i + " - Image:", cardImage);

  // 3. Au survol du bouton View → réduire la card
  viewBtn.addEventListener("mouseenter", function() {
    console.log("MOUSEENTER sur View - Card " + i);
    cardText.style.display = "none";
    cardImage.style.width = "20%";
  });

  // 4. Quand la souris quitte le bouton View → remettre normal
  viewBtn.addEventListener("mouseleave", function() {
    console.log("MOUSELEAVE sur View - Card " + i);
    cardText.style.display = "";
    cardImage.style.width = "";
  });
}

// ============================================
// FONCTIONNALITÉ 7 : Bouton ==> rotation droite
// ============================================

// 1. Pointer sur le bouton ==>
let btnRight = document.querySelector(".btn-secondary");
console.log("Bouton ==> trouvé :", btnRight);

// 2. Pointer sur le conteneur parent des cards (la div.row dans .album)
let cardsContainer = document.querySelector(".album .row");
console.log("Conteneur des cards :", cardsContainer);

// 3. Au clic, déplacer la dernière card en premier
btnRight.addEventListener("click", function() {
  // Récupérer tous les enfants (les div.col-md-4 qui contiennent les cards)
  let cards = cardsContainer.querySelectorAll(".col-md-4");
  console.log("Cards trouvées :", cards.length);
  let lastCard = cards[cards.length - 1];
  let firstCard = cards[0];

  console.log("Déplacement de la dernière card en premier");
  cardsContainer.insertBefore(lastCard, firstCard);
});

// ============================================
// FONCTIONNALITÉ 8 : Bouton <== rotation gauche
// ============================================

// 1. Pointer sur le bouton <==
let btnLeft = document.querySelector(".btn-primary");
console.log("Bouton <== trouvé :", btnLeft);

// 2. Au clic, déplacer la première card en dernier
btnLeft.addEventListener("click", function(event) {
  // IMPORTANT: bloquer le comportement par défaut du lien
  event.preventDefault();

  // Récupérer toutes les cards
  let cards = cardsContainer.querySelectorAll(".col-md-4");
  console.log("Cards trouvées :", cards.length);
  let firstCard = cards[0];
  let lastCard = cards[cards.length - 1];

  // insertBefore sur lastCard.nextSibling = "insertAfter" la dernière card
  console.log("Déplacement de la première card en dernier");
  cardsContainer.insertBefore(firstCard, lastCard.nextSibling);
});

// ============================================
// FONCTIONNALITÉ 9 : Raccourcis clavier sur logo
// ============================================

// 1. Pointer sur le logo "JS & Events"
let logo = document.querySelector(".navbar-brand");
console.log("Logo trouvé :", logo);

// 2. Rendre le logo focusable (pour recevoir les événements clavier)
logo.setAttribute("tabindex", "0");

// 3. Pointer sur le body
let body = document.body;

// 4. Écouter les touches clavier quand le logo est sélectionné
logo.addEventListener("keypress", function(event) {
  console.log("Touche pressée :", event.key);

  // Retirer toutes les classes du body avant d'en ajouter
  body.className = "";

  if (event.key === "a") {
    // Page sur 4 colonnes à gauche
    body.classList.add("col-4");
    console.log("Mode: 4 colonnes à gauche");
  } else if (event.key === "y") {
    // Page sur 4 colonnes au milieu
    body.classList.add("col-4", "offset-md-4");
    console.log("Mode: 4 colonnes au milieu");
  } else if (event.key === "p") {
    // Page sur 4 colonnes à droite
    body.classList.add("col-4", "offset-md-8");
    console.log("Mode: 4 colonnes à droite");
  } else if (event.key === "b") {
    // Retour à la normale (classes déjà retirées)
    console.log("Mode: normal");
  }
});
