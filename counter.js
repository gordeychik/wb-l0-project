const counters = document.querySelectorAll(".counter__wrapper");
const orderItems = document
  .querySelector(".cart__cartItems")
  .querySelectorAll(".orderItem");

orderItems.forEach((item) => {
  const counterCount = item.querySelector(".counter__count");
  const addButton = item.querySelector(".counter__addButton");
  const subButton = item.querySelector(".counter__subButton");
  const priceAmount = item.querySelector(".orderItem__priceWrapperCash");

  subButton.addEventListener("click", () => {
    let currentCount = parseInt(counterCount.textContent);

    if (currentCount > 0) {
      counterCount.textContent = currentCount - 1;
      updateCounterStyle();
      console.log(parseInt(priceAmount.textContent), parseInt(counterCount.textContent))

      priceAmount.textContent = parseInt(priceAmount.textContent) * parseInt(counterCount.textContent);
    }
  });

  addButton.addEventListener("click", () => {
    let currentCount = parseInt(counterCount.textContent);
    if (item.id !== "counter2" && currentCount < 2) {
      counterCount.textContent = parseInt(counterCount.textContent) + 1;
      updateCounterStyle();
    } else if (item.id === "counter2") {
      counterCount.textContent = parseInt(counterCount.textContent) + 1;
      updateCounterStyle();
    }
    console.log(parseInt(priceAmount.textContent), parseInt(counterCount.textContent))
    priceAmount.textContent = parseInt(priceAmount.textContent) * parseInt(counterCount.textContent);
  });

  function updateCounterStyle() {
    if (parseInt(counterCount.textContent) === 0) {
      subButton.style.color = "#00000033";
    } else {
      subButton.style.color = "black";
    }

    if (parseInt(counterCount.textContent) === 2 && item.id !== "counter2") {
      addButton.style.color = "#00000033";
    } else {
      addButton.style.color = "black";
    }
  }
});
