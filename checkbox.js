const chooseAll = document.getElementById("chooseAll");
const products = document.querySelector(".cart__cartItems");
const checkboxes = products.getElementsByClassName("checkbox");
const totalPrice = document.getElementById("totalPrice");
const cartItems = products.querySelectorAll(".cartItem");

let total = 0;

const sumTotalPrice = () => {
  cartItems.forEach((item) => {
    console.log(item.querySelector(".checkbox").checked);
    if (item.querySelector(".checkbox").checked) {
      total += parseInt(
        item
          .querySelector(".orderItem__priceWrapperCash")
          .innerHTML.replaceAll(" ", "")
      );
    }
  });

  totalPrice.innerHTML = total;
  total = 0;
};

chooseAll.addEventListener("click", () => {
  if (chooseAll.checked === true) {
    for (let item of checkboxes) {
      item.checked = true;
    }
  } else {
    for (let item of checkboxes) {
      item.checked = false;
    }
  }
  sumTotalPrice();
});

products.addEventListener("click", (event) => {
  if (event.target.type === "checkbox") {
    let checkedCount = 0;
    for (let item of checkboxes) {
      if (item.checked === true) {
        checkedCount++;
      }
    }
    if (checkedCount === checkboxes.length) {
      chooseAll.checked = true;
    } else {
      chooseAll.checked = false;
    }

    sumTotalPrice();
  }
});
