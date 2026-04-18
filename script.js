const form = document.getElementById("formulaire");
const confirmation = document.getElementById("confirmation");

const nomInput = document.getElementById("nom");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

let offreChoisie = null;

// FORMULAIRE
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nom = nomInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (!nom || !email || !message) {
    confirmation.textContent = "Veuillez remplir tous les champs.";
    confirmation.style.color = "red";
    return;
  }

  confirmation.textContent = "Message envoyé avec succès !";
  confirmation.style.color = "green";

  form.reset();
});

// CHOIX OFFRE
let panier = [];

// AJOUT AU PANIER
function choisirOffre(nom, prix) {
  const existant = panier.find(item => item.nom === nom);

  if (existant) {
    existant.quantite++;
  } else {
    panier.push({ nom, prix, quantite: 1 });
  }

  sauvegarderPanier();
  afficherPanier();
}

// AFFICHAGE PANIER
function afficherPanier() {
  const container = document.getElementById("panier-items");
  const totalElement = document.getElementById("total");

  container.innerHTML = "";
  let total = 0;

  panier.forEach((item, index) => {
    total += item.prix * item.quantite;

    container.innerHTML += `
      <p>
        ${item.nom} - ${item.prix}€ x ${item.quantite}
        <button onclick="supprimerProduit(${index})">❌</button>
      </p>
    `;
  });

  totalElement.textContent = "Total : " + total + "€";
}

// SUPPRIMER PRODUIT
function supprimerProduit(index) {
  panier.splice(index, 1);
  sauvegarderPanier();
  afficherPanier();
}

// VIDER PANIER
function viderPanier() {
  panier = [];
  sauvegarderPanier();
  afficherPanier();
}

// SAUVEGARDE
function sauvegarderPanier() {
  localStorage.setItem("panier", JSON.stringify(panier));
}

// CHARGEMENT PAGE
window.onload = function () {
  const saved = localStorage.getItem("panier");

  if (saved) {
    panier = JSON.parse(saved);
    afficherPanier();
  }
};

  // effet visuel
  document.querySelectorAll(".carte").forEach(c => c.classList.remove("active"));
  element.parentElement.classList.add("active");

  // sauvegarde
  localStorage.setItem("offre", JSON.stringify(offreChoisie));

  element.parentElement.querySelector(".selection").textContent =
  `Offre sélectionnée : ${nom} - ${prix}€`;
}

// COMMANDER
function commander() {
  if (!offreChoisie) {
    alert("Veuillez choisir une offre !");
    return;
  }

  alert(`Commande confirmée : ${offreChoisie.nom} - ${offreChoisie.prix}€`);
}

// CHARGEMENT PAGE
window.onload = function() {
  const saved = localStorage.getItem("offre");

  if (saved) {
    offreChoisie = JSON.parse(saved);

    const zones = document.querySelectorAll(".selection");
zones.forEach(zone => {
  zone.textContent = `Offre sélectionnée : ${offreChoisie.nom} - ${offreChoisie.prix}€`;
});
}
