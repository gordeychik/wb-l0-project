const titlesDisabled = document.querySelectorAll(".overview__title");

window.addEventListener("resize", () => {
  if (document.body.clientWidth < 321) {
    titlesDisabled.forEach((elem, i) => {
      elem.textContent = elem.textContent.substring(0, 100) + "...";
    });
  }
});