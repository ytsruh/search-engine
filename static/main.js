const random = Math.random().toString().substring(0, 5).split(".")[1];
const heroText = "Search 0.0000000" + random + "% of the web*";
const hero = document.querySelector("#hero-text");
hero.innerHTML = heroText;
