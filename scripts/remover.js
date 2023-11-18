const items = document.querySelector(".cart__cartItems");
const itemsAbsence = document.querySelector(".cart__cartItemsAbsence");

items.addEventListener("click", (event) => {
  let target = event.target;
  if (target.closest(".orderItem__buttonDelete")) {
    if (target.closest(".cartItem")) {
      let item = target.closest(".cartItem");
      item.style.display = "none";
    }
  }
});

itemsAbsence.addEventListener("click", (event) => {
  let target = event.target;
  if (target.closest(".orderItem__buttonDelete")) {
    if (target.closest(".cartItem__absence")) {
      let itemAbsence = target.closest(".cartItem__absence");
      itemAbsence.style.display = "none";
    }
  }
});
