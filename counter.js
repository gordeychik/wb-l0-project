const counters = document.querySelectorAll(".counter__wrapper");
const orderItems = document
  .querySelector(".cart__cartItems")
  .querySelectorAll(".orderItem");

orderItems.forEach((item) => {
  const counter = item.querySelector(".counter__wrapper");
  const counterCount = item.querySelector(".counter__count");
  const addButton = item.querySelector(".counter__addButton");
  const subButton = item.querySelector(".counter__subButton");
  const priceAmount = item.querySelector(".orderItem__priceWrapperCash");
  const initialPrice = +item
    .querySelector("[data-initialPrice]")
    .getAttribute("data-initialPrice");

  subButton.addEventListener("click", () => {
    let currentCount = parseInt(counterCount.innerHTML);

    if (currentCount > 0) {
      counterCount.innerHTML = currentCount - 1;
      updateCounterStyle();
      priceAmount.innerHTML = initialPrice * parseInt(counterCount.innerHTML);
    }
  });

  addButton.addEventListener("click", () => {
    let currentCount = parseInt(counterCount.innerHTML);
    console.log(item);
    if (counter.id !== "counter2" && currentCount < 2) {
      counterCount.innerHTML = currentCount + 1;
      updateCounterStyle();
      priceAmount.innerHTML = initialPrice * parseInt(counterCount.innerHTML);
    } else if (counter.id === "counter2") {
      counterCount.innerHTML = currentCount + 1;
      updateCounterStyle();
      priceAmount.innerHTML = initialPrice * parseInt(counterCount.innerHTML);
    }
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
