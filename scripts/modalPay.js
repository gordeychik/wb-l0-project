const cartTitle = document.querySelector(".cartPayment__title");
const modalPay = document.getElementById("myModal");
const closeBtn = document.getElementById("closeBtn");
const modalText = document.getElementById("modalText");
const chooseBtn = document.getElementsByClassName("modal__btn");
const deliveryIcon = document.querySelector(".delivery__paragraphIcon");
const modalRadioButtons = document.querySelectorAll(".modalRadio");
const choosePaymentBtn = document.querySelector(".modal__btn");
const cardInfo = document.querySelector(".cartPayment__wrapper");
let paymentSystem = null;

cartTitle.addEventListener("click", (event) => {
  if (event.target.classList.contains("cartPayment__titleButton")) {
    modalPay.style.display = "flex";
  }
});

deliveryIcon.addEventListener("click", (event) => {
  if (event.target.classList.contains("delivery__paragraphIcon")) {
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
  cardInfo.innerHTML = "";
  cardInfo.appendChild(paymentSystem);
  modalPay.style.display = "none";
});
