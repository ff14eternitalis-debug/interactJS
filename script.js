let footer = document.querySelector("footer");
console.log("Footer trouvé :", footer);

let compteurClics = 0;

footer.addEventListener("click", function() {
  compteurClics++;
  console.log("clic numéro " + compteurClics);
});


let hamburgerBtn = document.querySelector(".navbar-toggler");
console.log("Bouton hamburger trouvé :", hamburgerBtn);

let navbarHeader = document.getElementById("navbarHeader");
console.log("Menu navbar trouvé :", navbarHeader);

hamburgerBtn.addEventListener("click", function() {
  navbarHeader.classList.toggle("collapse");
});


let firstCard = document.getElementsByClassName("card")[0];
console.log("Première card trouvée :", firstCard);

let firstCardText = firstCard.querySelector(".card-text");
console.log("Texte de la card :", firstCardText);

let firstCardEditBtn = firstCard.querySelector(".btn-outline-secondary");
console.log("Bouton Edit trouvé :", firstCardEditBtn);

firstCardEditBtn.addEventListener("click", function() {
  firstCardText.style.color = "red";
});

let secondCard = document.getElementsByClassName("card")[1];
console.log("Deuxième card trouvée :", secondCard);

let secondCardText = secondCard.querySelector(".card-text");
console.log("Texte de la card 2 :", secondCardText);

let secondCardEditBtn = secondCard.querySelector(".btn-outline-secondary");
console.log("Bouton Edit card 2 trouvé :", secondCardEditBtn);

secondCardEditBtn.addEventListener("click", function() {
  if (secondCardText.style.color === "green") {
    secondCardText.style.color = "";
  } else {
    secondCardText.style.color = "green";
  }
});

let navbar = document.querySelector(".navbar");
console.log("Navbar trouvée :", navbar);

let bootstrapCSS = document.querySelector("link[rel='stylesheet']");
console.log("Bootstrap CSS trouvé :", bootstrapCSS);

navbar.addEventListener("dblclick", function() {
  bootstrapCSS.disabled = !bootstrapCSS.disabled;
});

let allCards = document.getElementsByClassName("card");
console.log("Toutes les cards :", allCards);

for (let i = 0; i < allCards.length; i++) {
  let card = allCards[i];
  let cardText = card.querySelector(".card-text");
  let cardImage = card.querySelector(".card-img-top");
  let viewBtn = card.querySelector(".btn-success");

  console.log("Card " + i + " - View btn:", viewBtn);
  console.log("Card " + i + " - Text:", cardText);
  console.log("Card " + i + " - Image:", cardImage);

  viewBtn.addEventListener("mouseenter", function() {
    console.log("MOUSEENTER sur View - Card " + i);
    cardText.style.display = "none";
    cardImage.style.width = "20%";
  });

  viewBtn.addEventListener("mouseleave", function() {
    console.log("MOUSELEAVE sur View - Card " + i);
    cardText.style.display = "";
    cardImage.style.width = "";
  });
}

let btnRight = document.querySelector(".btn-secondary");
console.log("Bouton ==> trouvé :", btnRight);

let cardsContainer = document.querySelector(".album .row");
console.log("Conteneur des cards :", cardsContainer);

btnRight.addEventListener("click", function() {
  let cards = cardsContainer.querySelectorAll(".col-md-4");
  console.log("Cards trouvées :", cards.length);
  let lastCard = cards[cards.length - 1];
  let firstCard = cards[0];

  console.log("Déplacement de la dernière card en premier");
  cardsContainer.insertBefore(lastCard, firstCard);
});

let btnLeft = document.querySelector(".btn-primary");
console.log("Bouton <== trouvé :", btnLeft);

btnLeft.addEventListener("click", function(event) {
  event.preventDefault();

  let cards = cardsContainer.querySelectorAll(".col-md-4");
  console.log("Cards trouvées :", cards.length);
  let firstCard = cards[0];
  let lastCard = cards[cards.length - 1];

  console.log("Déplacement de la première card en dernier");
  cardsContainer.insertBefore(firstCard, lastCard.nextSibling);
});

let logo = document.querySelector(".navbar-brand");
console.log("Logo trouvé :", logo);

logo.setAttribute("tabindex", "0");

let body = document.body;

logo.addEventListener("keypress", function(event) {
  console.log("Touche pressée :", event.key);

  body.className = "";

  if (event.key === "a") {
    body.classList.add("col-4");
    console.log("Mode: 4 colonnes à gauche");
  } else if (event.key === "y") {
    body.classList.add("col-4", "offset-md-4");
    console.log("Mode: 4 colonnes au milieu");
  } else if (event.key === "p") {
    body.classList.add("col-4", "offset-md-8");
    console.log("Mode: 4 colonnes à droite");
  } else if (event.key === "b") {
    console.log("Mode: normal");
  }
});
