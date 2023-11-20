const cartTitle = document.querySelector(".cartPayment__title");
const modalPay = document.getElementById("myModal");
const closeBtn = document.getElementById("closeBtn");
const modalText = document.getElementById("modalText");
const chooseBtn = document.getElementsByClassName("modal__btn");
const deliveryIcon = document.getElementById("payIcon");
const modalRadioButtons = document.querySelectorAll(".modalRadio");
const choosePaymentBtn = document.querySelector(".modal__btn");
const cardInfo = document.querySelector(".cartPayment__wrapper");
const cardInfoPrice = document.querySelector(".pay__cardWrapper");
let paymentSystem = null;

deliveryIcon.addEventListener("click", (event) => {
  if (event.target.classList.contains("pay__icon")) {
    modalPay.style.display = "flex";
  }
});

cartTitle.addEventListener("click", (event) => {
  if (event.target.classList.contains("cartPayment__titleButton")) {
    modalPay.style.display = "flex";
  }
});

closeBtn.addEventListener("click", () => {
  modalPay.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modalPay) {
    modalPay.style.display = "none";
  }
});

modalRadioButtons.forEach((item) => {
  item.addEventListener("click", () => {
    const radio = item.querySelector("input");
    const paymentSystemInfo = item
      .querySelector(".modal__paymentInfo")
      .cloneNode(true);
    if (radio.checked) {
      paymentSystem = paymentSystemInfo;
    }
  });
});

choosePaymentBtn.addEventListener("click", () => {
  cardInfoPrice.innerHTML = "";
  cardInfoPrice.innerHTML = paymentSystem.innerHTML;
  cardInfo.innerHTML = "";
  cardInfo.appendChild(paymentSystem);
  modalPay.style.display = "none";
});
