/* RESET */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* BODY */
body {
  font-family: Arial, sans-serif;
  background: linear-gradient(to bottom, #f4f4f4, #e0e0e0);
}

/* HEADER */
header {
  background: linear-gradient(90deg, #111, #333);
  color: white;
  text-align: center;
  padding: 40px;
  letter-spacing: 2px;
}

h1 {
  font-size: 32px;
}

/* NAVIGATION */
nav {
  background-color: #333;
  padding: 10px;
  text-align: center;
}

nav a {
  color: white;
  margin: 0 15px;
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;
}

nav a:hover {
  color: orange;
  letter-spacing: 1px;
}

/* SECTIONS */
section {
  padding: 30px;
  text-align: center;
  margin: 20px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  animation: fadeIn 0.8s ease;
}

/* IMAGE */
img {
  width: 90%;
  max-width: 400px;
  border-radius: 10px;
  transition: transform 0.3s;
}

img:hover {
  transform: scale(1.05);
}

/* HERO */
.hero {
  padding: 40px 20px;
}

.hero h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

/* OFFRES */
.offres {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

/* CARTES */
.carte {
  background-color: white;
  padding: 25px;
  width: 250px;
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  text-align: center;
  transition: all 0.3s ease;
}

.carte:hover {
  transform: translateY(-10px) scale(1.03);
  box-shadow: 0 15px 35px rgba(0,0,0,0.2);
}

/* CARTE ACTIVE */
.carte.active {
  border: 2px solid orange;
  transform: scale(1.05);
}

/* TEXTE */
.carte h2 {
  color: #111;
}

.carte p {
  color: #555;
}

/* BOUTONS */
button {
  background: linear-gradient(45deg, orange, darkorange);
  border: none;
  padding: 12px 20px;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  transform: scale(1.1);
  box-shadow: 0 5px 15px rgba(255,140,0,0.5);
}

button:active {
  transform: scale(0.95);
}

/* CTA */
.cta {
  display: block;
  width: fit-content;
  margin: 30px auto;
  padding: 15px 25px;
  background: linear-gradient(45deg, orange, darkorange);
  color: white;
  text-decoration: none;
  border-radius: 10px;
  font-weight: bold;
  transition: 0.3s;
}

.cta:hover {
  transform: scale(1.1);
}

/* FORMULAIRE */
.contact {
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
  margin: auto;
}

input, textarea {
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 14px;
}

input:focus, textarea:focus {
  outline: none;
  border: 2px solid orange;
}

textarea {
  min-height: 100px;
  resize: none;
}

#confirmation {
  margin-top: 15px;
  font-weight: bold;
}

/* FOOTER */
footer {
  background-color: #111;
  color: white;
  text-align: center;
  padding: 10px;
}

/* ANIMATION */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* RESPONSIVE */
@media (max-width: 600px) {
  h1 {
    font-size: 22px;
  }

  .carte {
    width: 90%;
  }

  nav a {
    display: block;
    margin: 10px 0;
  }
    }
