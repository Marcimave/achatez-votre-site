const form = document.getElementById("formulaire");
const confirmation = document.getElementById("confirmation");

const nomInput = document.getElementById("nom");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

// =====================
// FORMULAIRE
// =====================
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

// =====================
// PANIER PRO
// =====================
let panier = [];

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

function supprimerProduit(index) {
  panier.splice(index, 1);
  sauvegarderPanier();
  afficherPanier();
}

function viderPanier() {
  panier = [];
  sauvegarderPanier();
  afficherPanier();
}

function sauvegarderPanier() {
  localStorage.setItem("panier", JSON.stringify(panier));
}

// =====================
// CHARGEMENT
// =====================
window.onload = () => {
  const saved = localStorage.getItem("panier");

  if (saved) {
    panier = JSON.parse(saved);
    afficherPanier();
  }
};

if (panier.length === 0) {
  container.innerHTML = "<p>Panier vide</p>";
  totalElement.textContent = "";
  return;
}

function payer() {
  if (panier.length === 0) {
    alert("Votre panier est vide");
    return;
  }

  //≈=≈=≈===≈≈=====≈≈===≈===
  // PAYEMENT 
  //=≈≈====≈≈≈≈===≈≈========

  const total = panier.reduce((sum, item) => sum + item.prix * item.quantite, 0);

  alert("Paiement simulé de " + total + "€");

  viderPanier();
}
