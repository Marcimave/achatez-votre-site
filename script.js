// =====================
// FORMULAIRE
// =====================
const form = document.getElementById("formulaire");
const confirmation = document.getElementById("confirmation");

const nomInput = document.getElementById("nom");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

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
  const btnPayer = document.querySelector(".btn-payer");

  container.innerHTML = "";

  if (panier.length === 0) {
    container.innerHTML = "<p>Panier vide</p>";
    totalElement.textContent = "";
    if (btnPayer) btnPayer.disabled = true;
    return;
  }

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

  if (btnPayer) btnPayer.disabled = false;
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
// PAIEMENT
// =====================
function payer() {
  if (panier.length === 0) {
    alert("Votre panier est vide");
    return;
  }

  const total = panier.reduce((sum, item) => sum + item.prix * item.quantite, 0);

  alert("Paiement simulé de " + total + "€");

  viderPanier();
}


// =====================
// CHARGEMENT PAGE
// =====================
document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("panier");

  if (saved) {
    panier = JSON.parse(saved);
  }

  afficherPanier();
});

const stripe = Stripe("TA_PUBLIC_KEY_ICI");

async function payer() {
  if (panier.length === 0) {
    alert("Votre panier est vide");
    return;
  }

  // appel serveur
  const response = await fetch("https://ton-serveur.com/create-checkout-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ panier })
  });

  const session = await response.json();

  stripe.redirectToCheckout({
    sessionId: session.id
  });
}
