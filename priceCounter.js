document.addEventListener("DOMContentLoaded", function () {
  const carts = document.querySelectorAll(".cartItem");
  const prices = [];

  carts.forEach((cart) => {
    const box = cart.querySelector(".checkbox");

    if (box) {
      box.addEventListener("change", function () {
        if (box.checked) {
          const priceElement = cart.querySelector(
            ".orderItem__priceWrapperCash"
          );
          if (priceElement) {
            const price = priceElement.textContent.trim();
            prices.push(price);
          }
        }
      });
    }
  });

  console.log(prices);
});
