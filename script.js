document.addEventListener("DOMContentLoaded", function () {
  let menu = document.querySelector("#menu-icon");
  let navlist = document.querySelector(".navlist");

  menu.onclick = () => {
    menu.classList.toggle("bx-x");

    navlist.classList.toggle("open");
  };

  const sr = ScrollReveal({
    distance: "20px",
    duration: 1000,
    delay: 200,
    reset: true,
  });

  sr.reveal(".hero-text", { origin: "top" });
  sr.reveal(".hero-img", { origin: "top" });
  sr.reveal(".icons", { origin: "left" });
  sr.reveal(".scroll-down", { origin: "right" });
  sr.reveal(".logo", { origin: "top" });
});
