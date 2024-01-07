// Home page random stat
if (window.location.pathname === "/") {
  const random = Math.random().toString().substring(0, 5).split(".")[1];
  const heroText = "Search 0.0000000" + random + "% of the web*";
  const hero = document.querySelector("#hero-text");
  hero.innerHTML = heroText;
}

document.body.addEventListener("htmx:afterOnLoad", function (event) {
  // If the element that triggered the event has an id of "feedback"
  if (event.detail.target.id === "feedback") {
    setTimeout(() => {
      document.querySelector("#feedback").remove();
    }, 3000);
  }
});
